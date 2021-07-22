import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StarWarsService } from '../start-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {
  availableSides: Array<{value: string, display: string}> = [
    {value: '', display: 'None'},
    {value: 'light', display: 'Light'},
    {value: 'dark', display: 'Dark'}
  ];
  characterForm!: FormGroup;
  swServices: StarWarsService;

  constructor(swServices: StarWarsService) {
    this.swServices = swServices;
   }

  ngOnInit(): void {
    this.characterForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'side': new FormControl('')
    })
  }

  onSubmit() {
    console.log(this.characterForm.value);
    this.swServices.addCharacter(this.characterForm.value.name, this.characterForm.value.side);
    this.characterForm.reset({'side': ''});
  }

}
