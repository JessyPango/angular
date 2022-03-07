import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-retour-livre',
  templateUrl: './retour-livre.component.html',
  styleUrls: ['./retour-livre.component.css']
})
export class RetourLivreComponent implements OnInit {

  id: number | undefined;

  livres = [
    {
      id: "1", titre: 'Android', imageUrl: 'assets/images/android.jpg',
      date: "01/10/2020", commander: 'non'
    },
    {
      id: "2", titre: 'Angular', imageUrl: 'assets/images/angular.jpg',
      date: '02/02/2020', commander: 'oui'
    },
    {
      id: "3", titre: 'Bootstrap', imageUrl: 'assets/images/bootstrap.jpg',
      date: "03/12/2020", commander: 'non'
    }
  ];

  liv = this.livres[0];


  constructor(private route: ActivatedRoute) {
  }

  loadlivre() {
    this.id = this.route.snapshot.params['id'];
    this.id = Number(this.id) - 1;
    this.liv = this.livres[this.id];
  }

  getColor() {
    if (this.liv.commander == 'oui') return 'green';
    else return 'red';
  }

  onObtenir() {
    this.liv.commander = 'oui';
  }

  reinitialiser() {
    this.liv.commander = 'non';
  }

  ngOnInit(): void {
    this.loadlivre();
  }

}