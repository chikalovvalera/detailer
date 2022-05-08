import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  index:string;

  serviceLabel:Map<string, string[]> = new Map([
    // ["Полировка", "Устрание"],
    // ["Химчистка", "value2"],
    // ["Защитное покрытие", "value3"],
    // ["Аудио подготовка", "value3"],
    ["Полировка" , [
      'Удаление глубоких царапин на кузове',
      'Восстановленние лакокрасочного покрытия с максимальной глубиной цвета',
      'Удаление круговых разводов, помутнений, рисок',
      'Удаление недостатков, возникающих при неграмотной покраске кузова']],
    ["Химчистка", [
      'Восстановления внешнего вида салона',
      'Борьба с неприятным запахом',
      'Дезинфекции',
      'Предотвращения аллергии',
      'Защита электропроводки',
      'Снижение нагрузки на систему кондиционирования',
      'Повышение рыночной стоимости авто при продаже'
    ]],
    ["Защитное покрытие", [
      'Защита лакокрасочного покрытия автомобиля',
      'Увеличение стойкости кузова к сколом и царапинам',
      'Защита от коррозии',
      'Сохранение блеска'
    ]],
    ['Аудио подготовка', [
      'Шумоизоляция',
      'Монтаж проводки для аудиосистемы',
      'Установка динамиков',
      'Установка головного мультимедиа устройства'
    ]]
  ]);

  

  constructor() {
    this.index = '';
   }

  ngOnInit(): void {
    this.index = '';
  }

  public setContent(index:string){
    if(this.index === index) {
      this.index = '';
    } else {
      this.index = index;
    }
  }
}
