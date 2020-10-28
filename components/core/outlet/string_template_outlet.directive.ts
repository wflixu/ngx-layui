import { Directive, EmbeddedViewRef, Input, OnChanges, SimpleChange, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[laStringTemplateOutlet]',
  exportAs: 'laStringTemplateOutlet'
})
export class LaStringTemplateOutletDirective implements OnChanges {
  private embeddedViewRef: EmbeddedViewRef<any> | null = null;
  @Input() laStringTemplateOutletContext: any | null = null;
  @Input() laStringTemplateOutlet: string | TemplateRef<any> | null = null;

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) {
    console.log(this.viewContainer);
    console.log(this.templateRef);


  }
  ngOnChanges(changes: SimpleChanges): void {
    const shouldRecreateView = (ctxChanges: SimpleChanges):Boolean =>{
      const { laStringTemplateOutletContext, laStringTemplateOutlet } = ctxChanges;
      let shouldOutletRecreate = false;
      if(laStringTemplateOutlet){
        if(laStringTemplateOutlet.firstChange){
          shouldOutletRecreate = true;
        }else{
          const isPreviousOutletTemplate = laStringTemplateOutlet.previousValue instanceof TemplateRef;
          const isCurrentOutletTemplate = laStringTemplateOutlet.currentValue instanceof TemplateRef;
          shouldOutletRecreate = isPreviousOutletTemplate || isCurrentOutletTemplate;
        }
      }

      const hasContextShapeChanged = (ctxChange: SimpleChange): boolean => {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
          for (const propName of currCtxKeys) {
            if (prevCtxKeys.indexOf(propName) === -1) {
              return true;
            }
          }
          return false;
        } else {
          return true;
        }
      };
      const shouldContextRecreate = laStringTemplateOutletContext && hasContextShapeChanged(laStringTemplateOutletContext);
      return shouldContextRecreate || shouldOutletRecreate;
    }
    const showReCreateView = shouldRecreateView(changes);
    if(showReCreateView){
      this.reCreateView();
    }else {
      this.updateContext();
    }

  }

  private reCreateView(): void {
    this.viewContainer.clear();
    const isTemplateRef = this.laStringTemplateOutlet instanceof TemplateRef;
    const templateRef = (isTemplateRef? this.laStringTemplateOutlet : this.templateRef) as TemplateRef<any>;
    this.embeddedViewRef = this.viewContainer.createEmbeddedView(templateRef, this.laStringTemplateOutletContext)
  }

  private updateContext(): void {
    const newCtx = this.laStringTemplateOutletContext;
    const oldCtx = this.embeddedViewRef!.context as any;
    if (newCtx) {
      for (const propName of Object.keys(newCtx)) {
        oldCtx[propName] = newCtx[propName];
      }
    }
  }
}
