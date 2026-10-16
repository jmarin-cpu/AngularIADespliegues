import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the header and responsive learning content', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-header')).not.toBeNull();
    expect(compiled.querySelector('main#contenido-principal')).not.toBeNull();
    expect(compiled.querySelectorAll('.topic-card').length).toBe(3);
  });

  it('should connect the header navigation to sections on the page', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('app-header nav a');

    links.forEach((link) => {
      const targetId = link.getAttribute('href')?.slice(1);
      expect(targetId).toBeTruthy();
      expect(compiled.querySelector(`#${targetId}`)).not.toBeNull();
    });
  });
});
