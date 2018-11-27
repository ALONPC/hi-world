import { Component, OnInit } from '@angular/core';
import { Country } from  '../../classes/country';
import { Region } from '../../classes/region';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  allCountries : any = [];
  allRegions : any = [];

  countries : any = [];
  regions : any = [];

  createCountry(name, territoryKm, arrRegions, code){
    var country =  new Country();
    country.name = name;
    country.territoryKm = territoryKm;
    country.regions = arrRegions;
    country.code = code;
    this.allCountries.push(country);
  }

  createRegion(name){
    var region = new Region();
    region.name = name;
    return region;
  }

  buildRegionsOfCountry(arrRegions){
    var regionsOfCountry = [];
    for (let i = 0; i < arrRegions.length; i++) {
      regionsOfCountry.push(this.createRegion(arrRegions[i]));
    }
    this.allRegions.push(regionsOfCountry);
    return regionsOfCountry;
  }

  constructor() { 

    var australianStates = ['Western Australia','Northern Territory','South Australia','Queensland','New South Wales','Victoria'];
    var cananadianProvinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon Territory'];
    var chileanRegions = ['Región de Arica y Parinacota','Región de Tarapacá','Región de Antofagasta','Región de Atacama', 'Región de Coquimbo', 'Región de Valparaíso', 'Región del Libertador General Bernardo OHiggins', 'Región del Maule', 'Región de Ñuble', 'Región del Bíobío', 'Región de la Araucanía', 'Región de los Ríos', 'Región de los Lagos', 'Región de Aysén del G. Carlos Ibañez del Campo', 'Región de Magallanes y de la Antártica Chilena', 'Región Metropolitana de Santiago'];

    var allAustralianRegions = this.buildRegionsOfCountry(australianStates);
    var allCanadianProvinces = this.buildRegionsOfCountry(cananadianProvinces);
    var allChileanRegions = this.buildRegionsOfCountry(chileanRegions);

    this.createCountry('Australia', 7741220, allAustralianRegions, 'au');
    this.createCountry('Canada', 9984670, allCanadianProvinces, 'ca');
    this.createCountry('Chile', 7561024, allChileanRegions, 'cl');

    console.log(this.allRegions);
    console.log(this.allCountries);
  }

  ngOnInit() {
    
  }

}