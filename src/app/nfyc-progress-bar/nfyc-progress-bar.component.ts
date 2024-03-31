import { Component, OnInit } from '@angular/core';
import { NfycService } from '../nfyc.service';

@Component({
  selector: 'app-nfyc-progress-bar',
  templateUrl: './nfyc-progress-bar.component.html',
  styleUrls: ['./nfyc-progress-bar.component.css']
})
export class NfycProgressBarComponent implements OnInit {

  value = 40;
  message = '';
  messages = ['Thank you registering..', 'Fetching Leetcode Profile..', 'Validating..', 'Almost there..', 'Completed!', 'Failed'];
  constructor(private nfycService: NfycService) { }

  progressBarColor = 'success';
  ngOnInit(): void {
    this.nfycService.messageIndexEmitter.subscribe(index => {
      this.value = Math.min(100, 5 + (30 * index));
      if (index === 5) {
        this.progressBarColor = 'failed';
      }
      this.message = this.messages[index];
    });
  }

}
