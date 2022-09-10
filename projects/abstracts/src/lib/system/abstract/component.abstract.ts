import {
	Directive,
	HostBinding,
	Input,
} from "@angular/core";

import { Destroy } from "./destroy.abstract";

interface IComponentName {
	name: string;
}

interface IComponentBase<T extends string, M extends string> {
	theme: T | 'default';
	modifiers?: M | M[];
}

export interface IComponentFields<T extends string, M extends string> extends IComponentBase<T, M>, IComponentName {}

type TThemeField<T extends string, M extends string> = IComponentFields<T, M>['theme'];

type TModifierField<T extends string, M extends string> = IComponentFields<T, M>['modifiers'];

export type TConstructorProps<
	T extends string = string,
	M extends string = string,
> = Readonly<IComponentName & Partial<IComponentBase<T, M>>>;

@Directive()
export abstract class AbstractComponent<T extends string = string, M extends string = string>
	extends Destroy
	implements IComponentFields<T, M> {

	private _class: string = this.props.name;

	private _name: string = this.props.name;

	private _theme: TThemeField<T, M> = 'default';

	private _modifiers: TModifierField<T, M>;

	@HostBinding('class') private _hostClass: string = this.props.name;

	constructor(
		protected readonly props: TConstructorProps<T, M>,
	) {
		super();
		this.processInitParams(props);
	}

	public get hostClass(): string {
		return this._hostClass;
	}

	private set hostClass(data: string) {
		this._hostClass = data;
	}

	public get class(): string {
		return this._class;
	}

	private set class(data: string) {
		this._class = data;
	}

	public get name(): string {
		return this._name;
	}

	public set name(data: string) {
		this._name = data;
		this.class = data;
		this.hostClass = data;
		const {theme, modifiers} = this;
		this.processInitParams({theme, modifiers});
	}

	public get theme(): TThemeField<T, M> {
		return this._theme;
	}

	@Input()
	public set theme(theme: TThemeField<T, M>) {
		this._theme = theme;
		this.setTheme(this._theme);
	}

	public get modifiers(): TModifierField<T, M> {
		return this._modifiers;
	}

	@Input()
	public set modifiers(data: TModifierField<T, M>) {
		this._modifiers = data;
		this.removeAllModifiers();

		if (this._modifiers === undefined) {
			return;
		}

		this.addModifiers(this._modifiers);
	}

	protected removeModifiers(data: Required<IComponentFields<T, M>>['modifiers']): void {
		let result: string = this.hostClass;

		if (Array.isArray(data)) {
			data.forEach(item => {
				if (result.includes(`--${item}`)) {
					result = result.replace(` ${this.class}--${item}`, '');
				}
			});
		} else {
			result = result.replace(` ${this.class}--${data}`, '');
		}

		this.setNewHostClass(result);
	}

	protected addModifiers(data: Required<IComponentFields<T, M>>['modifiers']): void {
		let result: string = this.hostClass;

		if (Array.isArray(data)) {
			data.forEach(item => {
				if (item && !result.includes(`--${item}`)) {
					result += ` ${this.class}--${item}`;
				}
			});
		} else {
			result += ` ${this.class}--${data}`;
		}

		this.setNewHostClass(result);
	}

	private processInitParams({theme, modifiers}: Partial<IComponentBase<T, M>>): void {
		this.theme = theme ? theme : 'default';
		this.modifiers = modifiers;
	}

	private setTheme(theme: TThemeField<T, M>): void {
		const hostClass: string = this.hostClass.replace(new RegExp(`${this.class}--theme-[\\w\\d]+`, 'mgi'), '');
		const newHostClass: string = `${hostClass} ${this.class}--theme-${theme}`;
		this.setNewHostClass(newHostClass);
	}

	private setNewHostClass(newClass: string): void {
		if (newClass === this.hostClass) {
			return;
		}

		this.hostClass = newClass;
	}

	private removeAllModifiers(): void {
		this.setNewHostClass(this.hostClass.replace(new RegExp(`${this.class}--(?!theme)[\\w]+`, 'mgi'), ''));
	}
}
