import { Component } from '@angular/core';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
    // styles: [`
    //             .exemplo {
    //                 color: blue
    //             }`]
    // template: `<p>
    //                 Jacú topo
    //             </p>`
})

export class TopoComponent {
    public titulo: string = 'Learning English (with angular)'
}