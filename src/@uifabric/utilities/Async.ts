declare function setTimeout(cb: Function, delay: number): number;
declare function setInterval(cb: Function, delay: number): number;

/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
export class Async {
  private _timeoutIds: { [id: number]: boolean } | null = null;
  private _immediateIds: { [id: number]: boolean } | null = null;
  private _intervalIds: { [id: number]: boolean } | null = null;
  private _animationFrameIds: { [id: number]: boolean } | null = null;
  private _isDisposed: boolean;
  private _parent: object | null;
  // tslint:disable-next-line:no-any
  private _onErrorHandler: ((e: any) => void) | undefined;
  private _noop: () => void;
  // tslint:disable-next-line:no-any
  constructor(parent?: object, onError?: (e: any) => void) {
    this._isDisposed = false;
    this._parent = parent || null;
    this._onErrorHandler = onError;
    this._noop = () => {
      /* do nothing */
    };
  }

  /**
   * Dispose function, clears all async operations.
   */
  public dispose(): void {
    let id;

    this._isDisposed = true;
    this._parent = null;

    // Clear timeouts.
    if (this._timeoutIds) {
      for (id in this._timeoutIds) {
        if (this._timeoutIds.hasOwnProperty(id)) {
          this.clearTimeout(parseInt(id, 10));
        }
      }

      this._timeoutIds = null;
    }

    // Clear immediates.
    if (this._immediateIds) {
      for (id in this._immediateIds) {
        if (this._immediateIds.hasOwnProperty(id)) {
          this.clearImmediate(parseInt(id, 10));
        }
      }

      this._immediateIds = null;
    }

    // Clear intervals.
    if (this._intervalIds) {
      for (id in this._intervalIds) {
        if (this._intervalIds.hasOwnProperty(id)) {
          this.clearInterval(parseInt(id, 10));
        }
      }
      this._intervalIds = null;
    }

    // Clear animation frames.
    if (this._animationFrameIds) {
      for (id in this._animationFrameIds) {
        if (this._animationFrameIds.hasOwnProperty(id)) {
          this.cancelAnimationFrame(parseInt(id, 10));
        }
      }

      this._animationFrameIds = null;
    }
  }

  /**
   * SetTimeout override, which will auto cancel the timeout during dispose.
   * @param callback - Callback to execute.
   * @param duration - Duration in milliseconds.
   * @returns The setTimeout id.
   */
  public setTimeout(callback: () => void, duration: number): number {
    let timeoutId = 0;

    if (!this._isDisposed) {
      if (!this._timeoutIds) {
        this._timeoutIds = {};
      }

      /* tslint:disable:ban-native-functions */
      timeoutId = setTimeout(() => {
        // Time to execute the timeout, enqueue it as a foreground task to be executed.

        try {
          // Now delete the record and call the callback.
          if (this._timeoutIds) {
            delete this._timeoutIds[timeoutId];
          }
          callback.apply(this._parent);
        } catch (e) {
          if (this._onErrorHandler) {
            this._onErrorHandler(e);
          }
        }
      }, duration);
      /* tslint:enable:ban-native-functions */

      this._timeoutIds[timeoutId] = true;
    }

    return timeoutId;
  }

  /**
   * Clears the timeout.
   * @param id - Id to cancel.
   */
  public clearTimeout(id: number): void {
    if (this._timeoutIds && this._timeoutIds[id]) {
      /* tslint:disable:ban-native-functions */
      clearTimeout(id);
      delete this._timeoutIds[id];
      /* tslint:enable:ban-native-functions */
    }
  }

  /**
   * SetImmediate override, which will auto cancel the immediate during dispose.
   * @param callback - Callback to execute.
   * @returns The setTimeout id.
   */
  public setImmediate(callback: () => void): number {
    let immediateId = 0;

    if (!this._isDisposed) {
      if (!this._immediateIds) {
        this._immediateIds = {};
      }

      /* tslint:disable:ban-native-functions */
      let setImmediateCallback = () => {
        // Time to execute the timeout, enqueue it as a foreground task to be executed.

        try {
          // Now delete the record and call the callback.
          if (this._immediateIds) {
            delete this._immediateIds[immediateId];
          }
          callback.apply(this._parent);
        } catch (e) {
          this._logError(e);
        }
      };

      immediateId = window.setTimeout(setImmediateCallback, 0);
      /* tslint:enable:ban-native-functions */

      this._immediateIds[immediateId] = true;
    }

    return immediateId;
  }

  /**
   * Clears the immediate.
   * @param id - Id to cancel.
   */
  public clearImmediate(id: number): void {
    if (this._immediateIds && this._immediateIds[id]) {
      /* tslint:disable:ban-native-functions */
      window.clearTimeout(id);
      delete this._immediateIds[id];
      /* tslint:enable:ban-native-functions */
    }
  }

  /**
   * SetInterval override, which will auto cancel the timeout during dispose.
   * @param callback - Callback to execute.
   * @param duration - Duration in milliseconds.
   * @returns The setTimeout id.
   */
  public setInterval(callback: () => void, duration: number): number {
    let intervalId = 0;

    if (!this._isDisposed) {
      if (!this._intervalIds) {
        this._intervalIds = {};
      }

      /* tslint:disable:ban-native-functions */
      intervalId = setInterval(() => {
        // Time to execute the interval callback, enqueue it as a foreground task to be executed.
        try {
          callback.apply(this._parent);
        } catch (e) {
          this._logError(e);
        }
      }, duration);
      /* tslint:enable:ban-native-functions */

      this._intervalIds[intervalId] = true;
    }

    return intervalId;
  }

  /**
   * Clears the interval.
   * @param id - Id to cancel.
   */
  public clearInterval(id: number): void {
    if (this._intervalIds && this._intervalIds[id]) {
      /* tslint:disable:ban-native-functions */
      clearInterval(id);
      delete this._intervalIds[id];
      /* tslint:enable:ban-native-functions */
    }
  }

  /**
   * Creates a function that, when executed, will only call the func function at most once per
   * every wait milliseconds. Provide an options object to indicate that func should be invoked
   * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
   * function will return the result of the last func call.
   *
   * Note: If leading and trailing options are true func will be called on the trailing edge of
   * the timeout only if the the throttled function is invoked more than once during the wait timeout.
   *
   * @param func - The function to throttle.
   * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
   * @param options - The options object.
   * @returns The new throttled function.
   */
  public throttle<T extends Function>(
    func: T,
    wait?: number,
    options?: {
      leading?: boolean;
      trailing?: boolean;
    }
  ): T | (() => void) {
    if (this._isDisposed) {
      return this._noop;
    }

    let waitMS = wait || 0;
    let leading = true;
    let trailing = true;
    let lastExecuteTime = 0;
    let lastResult: T;
    // tslint:disable-next-line:no-any
    let lastArgs: any[];
    let timeoutId: number | null = null;

    if (options && typeof options.leading === 'boolean') {
      leading = options.leading;
    }

    if (options && typeof options.trailing === 'boolean') {
      trailing = options.trailing;
    }

    let callback = (userCall?: boolean) => {
      let now = new Date().getTime();
      let delta = now - lastExecuteTime;
      let waitLength = leading ? waitMS - delta : waitMS;
      if (delta >= waitMS && (!userCall || leading)) {
        lastExecuteTime = now;
        if (timeoutId) {
          this.clearTimeout(timeoutId);
          timeoutId = null;
        }
        lastResult = func.apply(this._parent, lastArgs);
      } else if (timeoutId === null && trailing) {
        timeoutId = this.setTimeout(callback, waitLength);
      }

      return lastResult;
    };

    // tslint:disable-next-line:no-any
    let resultFunction: () => T = (...args: any[]) => {
      lastArgs = args;
      return callback(true);
    };

    return resultFunction;
  }

  /**
   * Creates a function that will delay the execution of func until after wait milliseconds have
   * elapsed since the last time it was invoked. Provide an options object to indicate that func
   * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
   * to the debounced function will return the result of the last func call.
   *
   * Note: If leading and trailing options are true func will be called on the trailing edge of
   * the timeout only if the the debounced function is invoked more than once during the wait
   * timeout.
   *
   * @param func - The function to debounce.
   * @param wait - The number of milliseconds to delay.
   * @param options - The options object.
   * @returns The new debounced function.
   */
  public debounce<T extends Function>(
    func: T,
    wait?: number,
    options?: {
      leading?: boolean;
      maxWait?: number;
      trailing?: boolean;
    }
  ): ICancelable<T> & (() => void) {
    if (this._isDisposed) {
      let noOpFunction: ICancelable<T> & (() => T) = (() => {
        /** Do nothing */
      }) as ICancelable<T> & (() => T);

      noOpFunction.cancel = () => {
        return;
      };
      /* tslint:disable:no-any */
      noOpFunction.flush = (() => null) as any;
      /* tslint:enable:no-any */
      noOpFunction.pending = () => false;

      return noOpFunction;
    }

    let waitMS = wait || 0;
    let leading = false;
    let trailing = true;
    let maxWait: number | null = null;
    let lastCallTime = 0;
    let lastExecuteTime = new Date().getTime();
    let lastResult: T;
    // tslint:disable-next-line:no-any
    let lastArgs: any[];
    let timeoutId: number | null = null;

    if (options && typeof options.leading === 'boolean') {
      leading = options.leading;
    }

    if (options && typeof options.trailing === 'boolean') {
      trailing = options.trailing;
    }

    if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
      maxWait = options.maxWait;
    }

    let markExecuted = (time: number) => {
      if (timeoutId) {
        this.clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastExecuteTime = time;
    };

    let invokeFunction = (time: number) => {
      markExecuted(time);
      lastResult = func.apply(this._parent, lastArgs);
    };

    let callback = (userCall?: boolean) => {
      let now = new Date().getTime();
      let executeImmediately = false;
      if (userCall) {
        if (leading && now - lastCallTime >= waitMS) {
          executeImmediately = true;
        }
        lastCallTime = now;
      }
      let delta = now - lastCallTime;
      let waitLength = waitMS - delta;
      let maxWaitDelta = now - lastExecuteTime;
      let maxWaitExpired = false;

      if (maxWait !== null) {
        // maxWait only matters when there is a pending callback
        if (maxWaitDelta >= maxWait && timeoutId) {
          maxWaitExpired = true;
        } else {
          waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
        }
      }

      if (delta >= waitMS || maxWaitExpired || executeImmediately) {
        invokeFunction(now);
      } else if ((timeoutId === null || !userCall) && trailing) {
        timeoutId = this.setTimeout(callback, waitLength);
      }

      return lastResult;
    };

    let pending = (): boolean => {
      return !!timeoutId;
    };

    let cancel = (): void => {
      if (pending()) {
        // Mark the debounced function as having executed
        markExecuted(new Date().getTime());
      }
    };

    let flush = (): T => {
      if (pending()) {
        invokeFunction(new Date().getTime());
      }

      return lastResult;
    };

    // tslint:disable-next-line:no-any
    let resultFunction: ICancelable<T> & (() => T) = ((...args: any[]) => {
      lastArgs = args;
      return callback(true);
    }) as ICancelable<T> & (() => T);

    resultFunction.cancel = cancel;
    resultFunction.flush = flush;
    resultFunction.pending = pending;

    return resultFunction;
  }

  public requestAnimationFrame(callback: () => void): number {
    let animationFrameId = 0;

    if (!this._isDisposed) {
      if (!this._animationFrameIds) {
        this._animationFrameIds = {};
      }

      /* tslint:disable:ban-native-functions */
      let animationFrameCallback = () => {
        try {
          // Now delete the record and call the callback.
          if (this._animationFrameIds) {
            delete this._animationFrameIds[animationFrameId];
          }

          callback.apply(this._parent);
        } catch (e) {
          this._logError(e);
        }
      };

      animationFrameId = window.requestAnimationFrame
        ? window.requestAnimationFrame(animationFrameCallback)
        : window.setTimeout(animationFrameCallback, 0);
      /* tslint:enable:ban-native-functions */

      this._animationFrameIds[animationFrameId] = true;
    }

    return animationFrameId;
  }

  public cancelAnimationFrame(id: number): void {
    if (this._animationFrameIds && this._animationFrameIds[id]) {
      /* tslint:disable:ban-native-functions */
      window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
      /* tslint:enable:ban-native-functions */
      delete this._animationFrameIds[id];
    }
  }

  // tslint:disable-next-line:no-any
  protected _logError(e: any): void {
    if (this._onErrorHandler) {
      this._onErrorHandler(e);
    }
  }
}

export type ICancelable<T> = {
  flush: () => T;
  cancel: () => void;
  pending: () => boolean;
};
