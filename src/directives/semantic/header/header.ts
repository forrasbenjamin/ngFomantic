/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import { Component, View, NgFor } from "angular2/angular2";
import { MenuServices } from "../../../services/menu";

@Component({
	bindings: [MenuServices],
	properties: ["title", "logo"],
	selector : "header"
})

@View({
	directives: [NgFor],
	template: `<div class="ui stackable menu fixed">
    <div class="ui container">
        <a href="#/" class="header item">
            <img class="logo" alt="{{title}}" src="/assets/images/semantic.png">
            <img alt="{{title}}" class="logo" src="/assets/images/angular.png">
        </a>
        <a *ng-for="var menu of menu.items" href="{{menu.link}}" class="item">{{menu.title}}</a>
    </div>
</div>`
})

export class UIHeaderComponent {

	constructor(private menu: MenuServices) {}
}