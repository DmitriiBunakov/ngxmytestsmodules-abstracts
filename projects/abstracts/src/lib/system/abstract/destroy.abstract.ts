import {
	Directive,
	OnDestroy,
} from "@angular/core";

import { Subject } from "rxjs";

@Directive()
export abstract class Destroy implements OnDestroy {
	protected destroy$: Subject<void> = new Subject();

	public ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
