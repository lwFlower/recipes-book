import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideChevronLeft } from '@lucide/angular';

@Component({
  imports: [LucideChevronLeft, RouterLink],
  selector: 'app-return-back',
  styleUrl: './return-back.css',
  templateUrl: './return-back.html',
})
export class ReturnBack {}
