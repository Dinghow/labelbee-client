import { i18n } from '@labelbee/lb-components';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      NewProject: 'New Project',
      ProjectList: 'Project List',
      NewOneStepProject: 'Single Step',
      NewMultiStepProject: 'Multiple Step',
      QAStep: 'Quality Inspection - Step {{step}}',
      Confirm: 'Confirm',
      NoData: 'No Data',
      TaskSteps: 'Task Steps',
      AddTaskStepsNotify: 'Please add task steps',
      New: 'New',
      SelectDataSourceNotify: 'Please select the data source',
      SelectToolNotify: 'Please select an annotation tool',
      DataSource: 'Data Source',
      OriginalImage: 'Original Image',
      AnnotationTool: 'Annotation Tool',
      Save: 'Save',
      ProjectName: 'Project Name',
      Required: 'Required',
      SelectImageFolder: 'Image Path',
      InputProjectName: 'Please Input Project Name',
      SelectResultFolder: 'Result Path',
      SelectResultFolderNotify: 'Result files will overwrite path files',
      UpperLimitPoints: 'Upper Limit Points',
      TextAnnotation: 'Text',
      AttributeAnnotation: 'Attribute',
      Straight: 'Straight',
      Curve: 'Curve',
      LineType: 'Line Type',
      ClosedPoints: 'Closed Points',
      PointsLimit: 'Points Limit',
      EdgeAdsorption: 'Edge Adsorption',
      PointsZeroLimitNotify: 'The number of points need greater than 0',
      PointLowLimitNotify: 'The minimum number of points must not be less than {{num}}',
      LowLimitMustGreaterThanUpNotify:
        'The upper limit of points must be greater than or equal to the lower limit',
      LowerLimitPoints: 'Lower Limit Points',
      SmallestSize: 'Smallest Size',
      ConfigurationFormatErrorNotify: 'Configuration format error',
      Form: 'Form',
      Type: 'Type',
      InputReg:
        'Please enter a regular expression (Recommended to contact developer for assistance)',
      TextList: 'Text List',
      Name: 'Name',
      MaximumTextInput: 'Maximum Text Input',
      DefaultTextCharactersLimitNotify:
        'Please enter a  default text no more than ${len} characters',
      Add: 'Add',
      TextSettings: 'Text Settings',
      DisplayValue: 'Display Value',
      SaveValue: 'Save Value',
      MoreSettings: 'More Settings',
      ImagePath: 'Image Path',
      ResultPath: 'Result Path',
      ConfirmToDelete: 'Confirm To Delete',
      OutOfTargetAnnotation: 'Out-Of-Target',
      CopyThePreview: 'Copy The Preview',
      ShowOrder: 'Show Order',
      Detection: 'Detection',
      Classification: 'Classification',
      SemanticSegmentation: 'Segmentation',
      Line: 'Line',
      Text: 'Text',
      Point: 'Point',
      MultiStepAnnotation: 'Multi-Step Annotation',
      NStep: '{{step}}-th Step',
      NStep_one: '{{step}}-st Step',
      NStep_two: '{{step}}-nd Step',
      NStep_three: '{{step}}-rd Step',
      AnyString: 'Any',
      OrderString: 'Order',
      EnglishOnly: 'English Only',
      NumbersOnly: 'Numbers Only',
      CustomFormat: 'Custom Format',
      SelectExportFormat: 'Select export Format',
      ExportFormat: 'Export format',
      StandardFormat: 'LabelBee format',
      ExportSuccess: 'Export successfully',
      ExportCOCOLimitMsg: 'Only rectTool and polygonTool can realize the conversion of coco data',
      ExportYOLOLimitMsg: 'Only rectTool can realize the conversion of yolo data',
      ExportMaskLimitMsg: 'Only polygonTool can realize the conversion of Mask',
      SelectedExportPath: 'Choose Export path',
      MultiSelect: 'multi-select',
      DefaultOption: 'Default Option',
      MessageBeforeExport: 'Exporting, please wait',
      ImportFromClipboard: 'Import from clipboard',
      PleaseCopyTheCorrectStepList: 'Please copy the correct step list',
      CopyConfigSuccessfully: 'Copy project config Successfully',

      // Project Operation
      CopyProjectConfig: 'Copy project config',
      ExportAnnotationResults: 'Export annotation results',
      ModifyConfig: 'Modify config',

      // data Check
      NoImgInPath: 'No images in the current Path',
      NoSameConfig:
        'The toolType of project configuration does not match result in your resultPath, please check before annotating',
    },
  },
  cn: {
    translation: {
      NewProject: '新建项目',
      ProjectList: '项目列表',
      TaskSteps: '任务步骤',
      NewOneStepProject: '单步骤',
      NewMultiStepProject: '多步骤',
      QAStep: '质检-步骤{{step}}',
      ConfirmToDeleteSteps: '确定删除以下步骤？',
      Confirm: '确定',
      Cancel: '取消',
      NoData: '暂无数据',
      AddTaskStepsNotify: '请添加任务步骤',
      New: '新建',
      SelectDataSourceNotify: '请选择数据源',
      SelectToolNotify: '请选择标注工具',
      DataSource: '数据源',
      OriginalImage: '原图',
      AnnotationTool: '标注工具',
      Save: '保存',
      ProjectName: '项目名称',
      Required: '必填项',
      InputProjectName: '请输入项目名称',
      SelectImageFolder: '选择图片文件夹',
      SelectResultFolder: '选择结果文件夹',
      SelectResultFolderNotify:
        '注意：当前路径将会提取当前文件夹与图片文件夹对应的标注结果文件， 在任务退出之后覆盖当前路径的结果文件，需谨慎设置',
      UpperLimitPoints: '上限点数',
      TextAnnotation: '文本标注',
      AttributeAnnotation: '属性标注',
      StraightLine: '直线',
      CurveLine: '曲线',
      LineType: '线条类型',
      ClosedPoints: '闭合点数',
      PointsLimit: '点数限制',
      EdgeAdsorption: '边缘吸附',
      PointsZeroLimitNotify: '顶点数限制必须为大于0的数字',
      PointLowLimitNotify: '顶点数下限必须不能少于{{num}}',
      LowLimitMustGreaterThanUpNotify: '顶点数上限必须大于等于下限',
      LowerLimitPoints: '顶点数上限必须大于等于下限',
      SmallestSize: '最小尺寸',
      ConfigurationFormatErrorNotify: '配置格式错误',
      Type: '类别',
      Form: '表单',
      Value: '值',
      InputReg: '请输入正则表达式(建议联系开发人员协助)',
      TextList: '文本列表',
      Name: '名称',
      MaximumTextInput: '文本输入上限',
      DefaultText: '文本默认值',
      DefaultTextCharactersLimitNotify: '请输入不超过 {{len}} 个字的文本默认值',
      Add: '添加',
      TextSettings: '文本设置',
      DisplayValue: '显示值',
      SaveValue: '保存值',
      MoreSettings: '更多设置',
      ImagePath: '图片路径',
      ResultPath: '结果路径',
      ConfirmToDelete: '确认删除?',
      OutOfTargetAnnotation: '目标外标注',
      CopyThePreview: '复制上一张结果',
      ShowOrder: '显示标注顺序',
      Detection: '目标检测（矩形框）',
      Classification: '目标分类（标签）',
      SemanticSegmentation: '语义分割（多边形）',
      Line: '划线',
      Text: '文本',
      Point: '标点',
      MultiStepAnnotation: '多步骤标注',
      NStep: '第{{step}}步',
      AnyString: '任意字符',
      OrderString: '序号',
      EnglishOnly: '仅英文',
      NumbersOnly: '仅数字',
      CustomFormat: '自定义格式',
      SelectExportFormat: '选择导出格式',
      ExportFormat: '导出格式',
      StandardFormat: 'labelbee 格式',
      ExportSuccess: '导出成功',
      ExportCOCOLimitMsg: '仅限拉框、多边形工具可以实现 coco 数据的转换',
      ExportYOLOLimitMsg: '仅限拉框工具可以实现 yolo 数据的转换',
      ExportMaskLimitMsg: '仅限多边形工具可以实现 Mask 数据的转换',
      SelectedExportPath: '选择导出的路径',
      MultiSelect: '多选',
      DefaultOption: '默认选择',
      MessageBeforeExport: '导出中，请稍后',
      ImportFromClipboard: '剪切板导入',
      PleaseCopyTheCorrectStepList: '请复制正确的步骤列表',
      CopyConfigSuccessfully: '复制项目配置成功',

      // Project Operation
      CopyProjectConfig: '复制项目配置',
      ExportAnnotationResults: '导出标注结果',
      ModifyConfig: '修改配置',

      // data Check
      NoImgInPath: '当前路径没有图片',
      NoSameConfig: '项目配置工具类型跟结果不匹配，请检查再进入标注',
    },
  },
};

i18n.addResourceBundle('en', 'translation', resources.en.translation, true);
i18n.addResourceBundle('cn', 'translation', resources.cn.translation, true);

export default i18n;
