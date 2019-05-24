import { IKeytipLike } from './IKeytipLike';

export interface IKeytipConfig {
  keytips: IKeytipConfigItem[];
}

export interface IKeytipConfigItem {
  /**
   * Key Sequence for this keytip only
   * If sequence is not defined it will be derived from the content string
   */
  sequence?: string;

  /**
   * Content for the keytip
   */
  content: string;

  /**
   * Identifier for the keytip, to be used to access in the configMap
   */
  id: string;

  /**
   * Optional props in IKeytipProps
   */
  optionalProps?: Partial<IKeytipLike>;

  /**
   * Children keytips of this keytip
   */
  children?: IKeytipConfigItem[];
}

export interface IKeytipConfigMap {
  [id: string]: IKeytipLike;
}

/**
 * Builds a map of ID -> IKeytipProps
 *
 * @param config - IKeytipConfig object
 * @returns {IKeytipConfigMap} - Config map
 */
export function buildKeytipConfigMap(config: IKeytipConfig): IKeytipConfigMap {
  const configMap: IKeytipConfigMap = {};

  for (const keytip of config.keytips) {
    constructKeytip(configMap, [], keytip);
  }

  return configMap;
}

/**
 * Constructs a keytip from an IKeytipConfigItem and puts it in the configMap
 *
 * @param configMap - IKeytipConfigMap to store the keytip in
 * @param parentSequence - string of the parent keytip
 * @param keytip - IKeytipConfigItem data
 */
export function constructKeytip(configMap: IKeytipConfigMap, parentSequence: string[], keytip: IKeytipConfigItem): void {
  // Compute full key sequence
  const sequence = keytip.sequence ? keytip.sequence : keytip.content.toLocaleLowerCase();
  const keytipSequence = parentSequence.concat(sequence);

  // Save props in configMap
  const keytipProps: IKeytipLike = { ...keytip.optionalProps, keySequences: keytipSequence, content: keytip.content };
  configMap[keytip.id] = keytipProps;

  if (keytip.children) {
    for (const child of keytip.children) {
      // Create keytips for all children
      constructKeytip(configMap, keytipSequence, child);
    }
  }
}
