
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
//importar un modelo (objeto alumno)


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nombre:String='';
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl(),
      email: new FormControl()
    });
  }

  guardar(){
    console.log('datos');
    const obj=this.form.getRawValue();
    console.log(obj);
    this.nombre = obj.name;
   }

}

