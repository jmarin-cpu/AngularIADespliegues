import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide a semantic header and labeled navigation', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('header')).not.toBeNull();
    expect(compiled.querySelector('nav')?.getAttribute('aria-label')).toBe(
      'Navegación principal',
    );
    expect(compiled.querySelector('h1')?.textContent).toContain('Una idea nueva');
    expect(compiled.textContent).toContain('La curiosidad es un buen comienzo');
  });

  it('should provide touch-sized navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('nav a');

    expect(links.length).toBe(3);
    links.forEach((link) => {
      expect(getComputedStyle(link).minBlockSize).toBe('44px');
    });
  });
});
