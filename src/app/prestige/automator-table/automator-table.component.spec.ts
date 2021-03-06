import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AutomatorTableComponent } from "./automator-table.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { defaultImport } from "src/app/app.component.spec";
import { ActionHeaderComponent } from "src/app/action/action-header/action-header.component";
import { FormatPipe } from "src/app/format.pipe";
import { MainService } from "src/app/main.service";
import { OptionsService } from "src/app/options.service";

describe("AutomatorTableComponent", () => {
  let component: AutomatorTableComponent;
  let fixture: ComponentFixture<AutomatorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: defaultImport(),
      declarations: [
        AutomatorTableComponent,
        ActionHeaderComponent,
        FormatPipe
      ],
      providers: [MainService, OptionsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatorTableComponent);
    component = fixture.componentInstance;
    component.ms.start();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
