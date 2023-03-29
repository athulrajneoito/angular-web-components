import { Component } from '@angular/core';
import { SideBySideConfig, ConvertArrayToOptionList, InputConfig } from 'pop-common';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {
  inputBasic =  new InputConfig({ label: 'Full Name', hintText: 'Hint Text', hint: true, required: true });
  roles = [
    { id: '1', name: 'Administrator' },
    { id: '2', name: 'Supervisor' },
    { id: '3', name: 'Client', group: 'test' },
    { id: '4', name: 'Manager' },
    { id: '5', name: 'Agent' },
    { id: '6', name: 'Campaign Manager' },
    { id: '7', name: 'Agent Manger' },
  ];
  config = new SideBySideConfig({
    options: {
      values: ConvertArrayToOptionList(this.roles, {
        disabled: [2, 3],
      }),
    },
    assigned: [],
    display: 'Roles',
    displayTitle: true,
    displayHelper: true,
    displayCircleID: false,
    helpText: 'You have no roles.',
    assignAll: false,
    removeAll: false,
    assignedLabel: 'Roles',
    optionsLabel: 'Available',
    route: 'modules-overview',
    facade: true,
    patch: {
      path: '',
      field: 'role_fk',
      metadata: {
        roles: 1,
      },
    },
    filter: true,
    height: 600,
    // filterBoth: true,
    // disabled: false,
    // bucketLimit: 5,
    // bucketHeight: 490,
    // sort: true,
    // bucketLimit: 3,
  });
}
