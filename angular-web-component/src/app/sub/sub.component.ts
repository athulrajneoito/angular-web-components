import { Component } from '@angular/core';
import { FieldItemOption, InputConfig, SelectConfig } from 'pop-common';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss'],
})
export class SubComponent {
  toppingList = <FieldItemOption[]>[
    { value: 'tomato', name: 'Tomato' },
    { value: 'onions', name: 'Onions' },
    { value: 'olives', name: 'Olives' },
    { value: 'extra_cheese', name: 'Extra cheese' },
    { value: 'mushrooms', name: 'Mushroom' },
    { value: 'sausage', name: 'Sausage' },
    { value: 'pepperoni', name: 'Pepperoni' },
    { value: 'bacon', name: 'Bacon', disabled: true },
    { value: 'cheddar', name: 'Cheddar' },
    { value: 'swiss', name: 'Swiss' },
    { value: 'provolone', name: 'Provolone' },
  ];

  inputBasic = new InputConfig({
    label: 'Full Name',
    hintText: 'Hint Text',
    hint: true,
    required: true,
  });
  basic2 = new SelectConfig({
    value: 'onions',
    disabled: false,
    label: 'Basic Single Select',
    createTag: true,
    createNewActions: ['edit'],
    options: { values: this.toppingList },
    // createNewActions: ['edit'],
  });
}
