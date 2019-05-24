// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import { IIconOptions, IIconSubset, registerIcons } from '@uifabric/styling';

export function initializeIcons(baseUrl: string = '', options?: IIconOptions): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-7"`,
      src: `url('${baseUrl}fabric-icons-7-bbebf62d.woff') format('woff')`
    },
    icons: {
      FormLibraryMirrored: '\uEEBA',
      ReportLibrary: '\uEEBB',
      ReportLibraryMirrored: '\uEEBC',
      ContactCard: '\uEEBD',
      CustomList: '\uEEBE',
      CustomListMirrored: '\uEEBF',
      IssueTracking: '\uEEC0',
      IssueTrackingMirrored: '\uEEC1',
      PictureLibrary: '\uEEC2',
      OfficeAddinsLogo: '\uEEC7',
      OfflineOneDriveParachute: '\uEEC8',
      OfflineOneDriveParachuteDisabled: '\uEEC9',
      TriangleSolidUp12: '\uEECC',
      TriangleSolidDown12: '\uEECD',
      TriangleSolidLeft12: '\uEECE',
      TriangleSolidRight12: '\uEECF',
      TriangleUp12: '\uEED0',
      TriangleDown12: '\uEED1',
      TriangleLeft12: '\uEED2',
      TriangleRight12: '\uEED3',
      ArrowUpRight8: '\uEED4',
      ArrowDownRight8: '\uEED5',
      DocumentSet: '\uEED6',
      DelveAnalytics: '\uEEEE',
      ArrowUpRightMirrored8: '\uEEEF',
      ArrowDownRightMirrored8: '\uEEF0',
      CompanyDirectory: '\uEF0D',
      OpenEnrollment: '\uEF1C',
      CompanyDirectoryMirrored: '\uEF2B',
      OneDriveAdd: '\uEF32',
      ProfileSearch: '\uEF35',
      Header2: '\uEF36',
      Header3: '\uEF37',
      Header4: '\uEF38',
      RingerSolid: '\uEF3A',
      Eyedropper: '\uEF3C',
      MarketDown: '\uEF42',
      CalendarWorkWeek: '\uEF51',
      SidePanel: '\uEF52',
      GlobeFavorite: '\uEF53',
      CaretTopLeftSolid8: '\uEF54',
      CaretTopRightSolid8: '\uEF55',
      ViewAll2: '\uEF56',
      DocumentReply: '\uEF57',
      PlayerSettings: '\uEF58',
      ReceiptForward: '\uEF59',
      ReceiptReply: '\uEF5A',
      ReceiptCheck: '\uEF5B',
      Fax: '\uEF5C',
      RecurringEvent: '\uEF5D',
      ReplyAlt: '\uEF5E',
      ReplyAllAlt: '\uEF5F',
      EditStyle: '\uEF60',
      EditMail: '\uEF61',
      Lifesaver: '\uEF62',
      LifesaverLock: '\uEF63',
      InboxCheck: '\uEF64',
      FolderSearch: '\uEF65',
      CollapseMenu: '\uEF66',
      ExpandMenu: '\uEF67',
      Boards: '\uEF68',
      SunAdd: '\uEF69',
      SunQuestionMark: '\uEF6A',
      LandscapeOrientation: '\uEF6B',
      DocumentSearch: '\uEF6C',
      PublicCalendar: '\uEF6D',
      PublicContactCard: '\uEF6E',
      PublicEmail: '\uEF6F',
      PublicFolder: '\uEF70',
      WordDocument: '\uEF71',
      PowerPointDocument: '\uEF72',
      ExcelDocument: '\uEF73',
      GroupedList: '\uEF74',
      ClassroomLogo: '\uEF75',
      Sections: '\uEF76',
      EditPhoto: '\uEF77',
      Starburst: '\uEF78',
      ShareiOS: '\uEF79',
      AirTickets: '\uEF7A',
      PencilReply: '\uEF7B',
      Tiles2: '\uEF7C',
      SkypeCircleCheck: '\uEF7D',
      SkypeCircleClock: '\uEF7E',
      SkypeCircleMinus: '\uEF7F',
      SkypeMessage: '\uEF83',
      ClosedCaption: '\uEF84',
      ATPLogo: '\uEF85',
      OfficeFormsLogoInverse: '\uEF86',
      RecycleBin: '\uEF87',
      EmptyRecycleBin: '\uEF88',
      Hide2: '\uEF89',
      Breadcrumb: '\uEF8C',
      BirthdayCake: '\uEF8D',
      TimeEntry: '\uEF95',
      CRMProcesses: '\uEFB1',
      PageEdit: '\uEFB6',
      PageArrowRight: '\uEFB8',
      PageRemove: '\uEFBA',
      Database: '\uEFC7',
      DataManagementSettings: '\uEFC8'
    }
  };

  registerIcons(subset, options);
}
