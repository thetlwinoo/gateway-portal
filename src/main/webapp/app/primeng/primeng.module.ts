import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PortalButtonDemoModule } from './buttons/button/buttondemo.module';
import { PortalSplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { PortalDialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { PortalConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { PortalLightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { PortalTooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { PortalOverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { PortalSideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { PortalKeyFilterDemoModule } from './inputs/keyfilter/keyfilterdemo.module';
import { PortalInputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { PortalInputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { PortalInputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { PortalCalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { PortalCheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { PortalChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { PortalColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { PortalInputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { PortalInputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { PortalPasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { PortalAutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { PortalSliderDemoModule } from './inputs/slider/sliderdemo.module';
import { PortalSpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { PortalRatingDemoModule } from './inputs/rating/ratingdemo.module';
import { PortalSelectDemoModule } from './inputs/select/selectdemo.module';
import { PortalSelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { PortalListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { PortalRadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { PortalToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { PortalEditorDemoModule } from './inputs/editor/editordemo.module';

import { PortalMessagesDemoModule } from './messages/messages/messagesdemo.module';
import { PortalToastDemoModule } from './messages/toast/toastdemo.module';
import { PortalGalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { PortalFileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { PortalAccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { PortalPanelDemoModule } from './panel/panel/paneldemo.module';
import { PortalTabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { PortalFieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { PortalToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { PortalScrollPanelDemoModule } from './panel/scrollpanel/scrollpaneldemo.module';
import { PortalCardDemoModule } from './panel/card/carddemo.module';
import { PortalFlexGridDemoModule } from './panel/flexgrid/flexgriddemo.module';

import { PortalTableDemoModule } from './data/table/tabledemo.module';
import { PortalVirtualScrollerDemoModule } from './data/virtualscroller/virtualscrollerdemo.module';
import { PortalPickListDemoModule } from './data/picklist/picklistdemo.module';
import { PortalOrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { PortalFullCalendarDemoModule } from './data/fullcalendar/fullcalendardemo.module';
import { PortalTreeDemoModule } from './data/tree/treedemo.module';
import { PortalTreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { PortalPaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { PortalGmapDemoModule } from './data/gmap/gmapdemo.module';
import { PortalOrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { PortalCarouselDemoModule } from './data/carousel/carouseldemo.module';
import { PortalDataViewDemoModule } from './data/dataview/dataviewdemo.module';

import { PortalBarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { PortalDoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { PortalLinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { PortalPiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { PortalPolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { PortalRadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { PortalDragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';

import { PortalMenuDemoModule } from './menu/menu/menudemo.module';
import { PortalContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { PortalPanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { PortalStepsDemoModule } from './menu/steps/stepsdemo.module';
import { PortalTieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { PortalBreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { PortalMegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { PortalMenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { PortalSlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { PortalTabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { PortalBlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { PortalCaptchaDemoModule } from './misc/captcha/captchademo.module';
import { PortalDeferDemoModule } from './misc/defer/deferdemo.module';
import { PortalInplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { PortalProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { PortalRTLDemoModule } from './misc/rtl/rtldemo.module';
import { PortalTerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { PortalValidationDemoModule } from './misc/validation/validationdemo.module';
import { PortalProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
    imports: [
        PortalMenuDemoModule,
        PortalContextMenuDemoModule,
        PortalPanelMenuDemoModule,
        PortalStepsDemoModule,
        PortalTieredMenuDemoModule,
        PortalBreadcrumbDemoModule,
        PortalMegaMenuDemoModule,
        PortalMenuBarDemoModule,
        PortalSlideMenuDemoModule,
        PortalTabMenuDemoModule,

        PortalBlockUIDemoModule,
        PortalCaptchaDemoModule,
        PortalDeferDemoModule,
        PortalInplaceDemoModule,
        PortalProgressBarDemoModule,
        PortalInputMaskDemoModule,
        PortalRTLDemoModule,
        PortalTerminalDemoModule,
        PortalValidationDemoModule,

        PortalButtonDemoModule,
        PortalSplitbuttonDemoModule,

        PortalInputTextDemoModule,
        PortalInputTextAreaDemoModule,
        PortalInputGroupDemoModule,
        PortalCalendarDemoModule,
        PortalChipsDemoModule,
        PortalInputMaskDemoModule,
        PortalInputSwitchDemoModule,
        PortalPasswordIndicatorDemoModule,
        PortalAutoCompleteDemoModule,
        PortalSliderDemoModule,
        PortalSpinnerDemoModule,
        PortalRatingDemoModule,
        PortalSelectDemoModule,
        PortalSelectButtonDemoModule,
        PortalListboxDemoModule,
        PortalRadioButtonDemoModule,
        PortalToggleButtonDemoModule,
        PortalEditorDemoModule,
        PortalColorPickerDemoModule,
        PortalCheckboxDemoModule,
        PortalKeyFilterDemoModule,

        PortalMessagesDemoModule,
        PortalToastDemoModule,
        PortalGalleriaDemoModule,

        PortalFileUploadDemoModule,

        PortalAccordionDemoModule,
        PortalPanelDemoModule,
        PortalTabViewDemoModule,
        PortalFieldsetDemoModule,
        PortalToolbarDemoModule,
        PortalScrollPanelDemoModule,
        PortalCardDemoModule,
        PortalFlexGridDemoModule,

        PortalBarchartDemoModule,
        PortalDoughnutchartDemoModule,
        PortalLinechartDemoModule,
        PortalPiechartDemoModule,
        PortalPolarareachartDemoModule,
        PortalRadarchartDemoModule,

        PortalDragDropDemoModule,

        PortalDialogDemoModule,
        PortalConfirmDialogDemoModule,
        PortalLightboxDemoModule,
        PortalTooltipDemoModule,
        PortalOverlayPanelDemoModule,
        PortalSideBarDemoModule,

        PortalTableDemoModule,
        PortalDataViewDemoModule,
        PortalVirtualScrollerDemoModule,
        PortalFullCalendarDemoModule,
        PortalOrderListDemoModule,
        PortalPickListDemoModule,
        PortalTreeDemoModule,
        PortalTreeTableDemoModule,
        PortalPaginatorDemoModule,
        PortalOrgChartDemoModule,
        PortalGmapDemoModule,
        PortalCarouselDemoModule,
        PortalProgressSpinnerDemoModule
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalprimengModule {}
