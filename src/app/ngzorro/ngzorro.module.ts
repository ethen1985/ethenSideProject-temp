import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzIconModule,
    NzInputNumberModule,
    NzImageModule,
    NzStatisticModule,
    NzSelectModule,
    NzUploadModule,
    NzButtonModule,
    NzGridModule,
    NzLayoutModule,
    NzCardModule,
    NzSpinModule,
    NzAffixModule,
    NzTimelineModule,
  ],
  exports: [
    NzInputNumberModule,
    NzImageModule,
    NzStatisticModule,
    NzSelectModule,
    NzUploadModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzLayoutModule,
    NzAffixModule,
    NzCardModule,
    NzSpinModule,
    NzTimelineModule,
  ]
})
export class NgzorroModule { }
