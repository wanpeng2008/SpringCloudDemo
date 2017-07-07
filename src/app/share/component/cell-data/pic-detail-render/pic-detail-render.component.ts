import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {ViewCell} from "ng2-smart-table";

@Component({
  selector: 'app-pic-detail-render',
  templateUrl: './pic-detail-render.component.html',
  styleUrls: ['./pic-detail-render.component.css']
})
export class PicDetailRenderComponent implements OnInit, ViewCell {
  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderValue = this.value.toString()
  }
  onClick(){
    console.debug(this.rowData)
    let tr = this.getTr(this.el.nativeElement);
    let tbody = tr.parentNode
    //let table = tbody.parentNode
    if(tr.nextElementSibling &&
      tr.nextElementSibling.nodeName === 'TR' &&
      tr.nextElementSibling.className == 'pic-detail'){
      //tbody.removeChild(tr.nextElementSibling)
/*      var reg = new RegExp('(\\s|^)list-table-row-detail(\\s|$)');
      tr.className = tr.className.replace(reg, ' ');*/
      this.renderer.removeChild(tbody, tr.nextElementSibling)
      this.renderer.removeClass(tr, 'list-table-row-detail')
    }else{
/*      let newTr = document.createElement('TR')
      newTr.className = 'pic-detail'
      newTr.appendChild(document.createElement('TD'))
      let newTd = document.createElement('TD')
      newTd['colSpan']=tr.childElementCount-1 // exclude the checkbox column
      let contentDiv = document.createElement('app-pic-detail')
      newTd.appendChild(contentDiv)
      newTr.appendChild(newTd)
      if(tr.nextElementSibling){
        tbody.insertBefore(newTr, tr.nextElementSibling)
      }else{
        tbody.appendChild(newTr)
      }*/

      let newTr = this.renderer.createElement('tr')
      this.renderer.addClass(newTr, 'pic-detail')
      this.renderer.appendChild(newTr, this.renderer.createElement('td'))
      let newTd = this.renderer.createElement('td')
      this.renderer.setAttribute(newTd, 'colSpan', (tr.childElementCount-1).toString())
      let contentDiv = this.renderer.createElement('app-pic-detail')
      this.renderer.appendChild(newTd, contentDiv)
      this.renderer.appendChild(newTr, newTd)
      let nextSibling = this.renderer.nextSibling(tr)
      if(nextSibling){
        this.renderer.insertBefore(tbody,newTr,nextSibling)
      }else{
        this.renderer.appendChild(tbody,newTr)
      }
      //tr.className += ' list-table-row-detail'
      this.renderer.addClass(tr, 'list-table-row-detail');
    }
  }

  private getTr(element) {
    let customViewComponent = element.parentNode
    let div = customViewComponent.parentNode
    let tableCellViewMode = div.parentNode
    let ng2SmartTableCell = tableCellViewMode.parentNode
    let td = ng2SmartTableCell.parentNode
    let tr = td.parentNode
    return tr;
  }

}
/*
class Renderer2 {
  data : {[key: string]: any}
  destroy() : void
  createElement(name: string, namespace?: string) : any
  createComment(value: string) : any
  createText(value: string) : any
  destroyNode : (node: any) => void |
    appendChild(parent: any, newChild: any) : void
  insertBefore(parent: any, newChild: any, refChild: any) : void
  removeChild(parent: any, oldChild: any) : void
  selectRootElement(selectorOrNode: string|any) : any
  parentNode(node: any) : any
  nextSibling(node: any) : any
  setAttribute(el: any, name: string, value: string, namespace?: string) : void
  removeAttribute(el: any, name: string, namespace?: string) : void
  addClass(el: any, name: string) : void
  removeClass(el: any, name: string) : void
  setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2) : void
  removeStyle(el: any, style: string, flags?: RendererStyleFlags2) : void
  setProperty(el: any, name: string, value: any) : void
  setValue(node: any, value: string) : void
  listen(target: 'window'|'document'|'body'|any, eventName: string, callback: (event: any) => boolean | void) : () => void
}*/
