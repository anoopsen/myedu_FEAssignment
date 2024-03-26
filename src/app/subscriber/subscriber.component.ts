import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent {
  showPopup: boolean = false;
  subscriberForm!: FormGroup;
  selectedDate!: number;
  selectedMonth!: string;
  selectedYear!: number;
  dates: number[];
  months: string[];
  years: number[];
  selectedLangChips: string[] = [];
  selectedCount: number = 0;
  mysteryBoxPrice = 500;
  qty = 1;
  tax = 4.0;
  subTotal: number;
  shipping = 100;
  totalAmount: number;

  constructor(private formBuilder: FormBuilder) {
    this.dates = Array.from({ length: 31 }, (_, i) => i + 1);
    this.months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    this.years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

    this.subTotal = this.tax + this.mysteryBoxPrice * this.qty;
    this.totalAmount = this.shipping + this.subTotal;

    this.subscriberForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      childFullName: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      gender: ['', Validators.required],
      topics: [[], [Validators.required,this.validateTopics]],
      total: [this.totalAmount],
      grade: ['', Validators.required],
      
    });
    this.subscriberForm.controls['topics'].statusChanges.subscribe(status => {
      if (status === 'INVALID') {
          this.subscriberForm.controls['topics'].markAsTouched();
      }
  });
  }
  validateTopics(control: any): { [key: string]: string } | null {
    if (control.value && control.value.length < 3) {
      return { 'insufficientTopics': 'Choose at least 3 topics' };
    }
    return null;
  }

  get f() { return this.subscriberForm.controls; }

  onSubmit() {
    const selectedGrade = this.subscriberForm.get('grade')?.value;
    console.log('Form submitted:', this.subscriberForm.value);
    this.subscriberForm.reset();
    this.selectedLangChips = []; // Clear the selected topics
    this.selectedCount = 0; // Reset the selected count
    this.topics.forEach((topic)=>{
      topic.selected = false;
    })
    this.showPopup = true;
  }
  

  topics = [
    { id: 'Arabic', name: 'topics', value: 'Arabic', selected: false },
    { id: 'EVS', name: 'topics', value: 'Islamic', selected: false },
    { id: 'English', name: 'topics', value: 'English', selected: false },
    { id: 'History', name: 'topics', value: 'History', selected: false },
    { id: 'Mathematics', name: 'topics', value: 'Sports', selected: false }
  ];

  grades = [
    { id: 'Grade1', name: 'grades', value: 'Grade 1' },
    { id: 'Grade2', name: 'grades', value: 'Grade 2' },
    { id: 'Grade3', name: 'grades', value: 'Grade 3' },
    { id: 'Grade4', name: 'grades', value: 'Grade 4' },
    { id: 'Grade5', name: 'grades', value: 'Grade 5' },
  ]

  toggleSelection(topic: any) {
    topic.selected = !topic.selected;
    if (topic.selected) {
      if (this.selectedCount < 3) {
        this.selectedLangChips.push(topic.value);
        this.selectedCount++;
      } else {
        topic.selected = false;
      }
    } else {
      const index = this.selectedLangChips.indexOf(topic.value);
      if (index !== -1) {
        this.selectedLangChips.splice(index, 1);
        this.selectedCount--;
      }
    }
    this.subscriberForm.controls['topics'].setValue(this.selectedLangChips);
  }
}
