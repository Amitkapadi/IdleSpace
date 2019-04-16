import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainService } from "./main.service";
import { HomeComponent } from "./home/home.component";
import { ResLineComponent } from "./home/res-line/res-line.component";
import { FormatPipe } from "./format.pipe";
import { ResourceComponent } from "./resource/resource.component";
import { ResourceOverviewComponent } from "./resource-overview/resource-overview.component";
import { MaterialListComponent } from "./material-list/material-list.component";
import { TabComponent } from "./material-list/tab/tab.component";
import { ActionComponent } from "./action/action.component";
import { ActionHeaderComponent } from "./action/action-header/action-header.component";
import { ButtonsComponent } from "./action/buttons/buttons.component";
import { CantBuySignpostsComponent } from "./action/cant-buy-signposts/cant-buy-signposts.component";
import { PriceLineComponent } from "./action/price-line/price-line.component";
import { EndInPipe } from "./end-in.pipe";
import { PolynomComponent } from "./polynom/polynom.component";
import { FormsModule } from "@angular/forms";
import { OptionsService } from "./options.service";
import { FormattedQuantityComponent } from "./formatted-quantity/formatted-quantity.component";
import { LabComponent } from "./lab/lab.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ResearchComponent } from "./lab/research/research.component";
import { RomanPipe } from "./roman.pipe";
import { OptionsNavComponent } from "./options-nav/options-nav.component";
import { SaveComponent } from "./options-nav/save/save.component";
import { FleetDesignerComponent } from "./fleetDesigner/fleetDesigner.component";
import { DesignComponent } from "./fleetDesigner/design/design.component";
import { EditorComponent } from "./fleetDesigner/editor/editor.component";
import { ViewComponent } from "./fleetDesigner/view/view.component";
import { SizesPipe } from "./sizes.pipe";
import { ProductionTablesComponent } from "./production-tables/production-tables.component";
import { UiComponent } from "./options-nav/ui/ui.component";
import { BattleMenuComponent } from "./battle/battle.component";
import { EnemiesComponent } from "./enemies/enemies.component";
import { EnemyViewComponent } from "./enemies/enemy-view/enemy-view.component";
import { SizeNamePipe } from "./size-name.pipe";
import { SearchComponent } from "./enemies/search/search.component";
import { BattlefieldComponent } from "./battle/battlefield/battlefield.component";
import { ZoneComponent } from "./battle/zone/zone.component";
import { BattleService } from "./battle.service";
import { FleetTableComponent } from "./fleet-table/fleet-table.component";
import { ShipyardComponent } from "./fleetDesigner/shipyard/shipyard.component";
import { BonusViewComponent } from "./bonus-view/bonus-view.component";
import { JobComponent } from "./job/job.component";
import { PrestigeComponent } from "./prestige/prestige.component";
import { GroupTabComponent } from "./group-tab/group-tab.component";
import { ResourceGroupComponent } from "./group-tab/resource-group/resource-group.component";
import { ModdingComponent } from "./modding/modding.component";
import { ToastrModule } from "ngx-toastr";
import { NotificationsComponent } from "./options-nav/notifications/notifications.component";
import { DarkMatterComponent } from "./dark-matter/dark-matter.component";
import { InfoComponent } from "./info/info.component";
import { ResearchUnlocksComponent } from "./job/research-unlocks/research-unlocks.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResLineComponent,
    FormatPipe,
    ResourceComponent,
    ResourceOverviewComponent,
    MaterialListComponent,
    TabComponent,
    ActionComponent,
    ActionHeaderComponent,
    ButtonsComponent,
    CantBuySignpostsComponent,
    PriceLineComponent,
    EndInPipe,
    PolynomComponent,
    FormattedQuantityComponent,
    LabComponent,
    ResearchComponent,
    RomanPipe,
    OptionsNavComponent,
    SaveComponent,
    FleetDesignerComponent,
    DesignComponent,
    EditorComponent,
    ViewComponent,
    SizesPipe,
    ProductionTablesComponent,
    UiComponent,
    BattleMenuComponent,
    EnemiesComponent,
    EnemyViewComponent,
    SizeNamePipe,
    SearchComponent,
    BattlefieldComponent,
    ZoneComponent,
    FleetTableComponent,
    ShipyardComponent,
    BonusViewComponent,
    JobComponent,
    PrestigeComponent,
    GroupTabComponent,
    ResourceGroupComponent,
    ModdingComponent,
    NotificationsComponent,
    DarkMatterComponent,
    InfoComponent,
    ResearchUnlocksComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    DragDropModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [MainService, OptionsService, BattleService],
  bootstrap: [AppComponent],
  exports: [PolynomComponent]
})
export class AppModule {}
