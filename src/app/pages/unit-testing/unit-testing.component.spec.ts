import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitTestingComponent } from './unit-testing.component';
import { FetchDataService } from './services/fetch-data.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('UnitTestingComponent', () => {
    let component: UnitTestingComponent;
    let fixture: ComponentFixture<UnitTestingComponent>;
    let mockFetchDataService: jasmine.SpyObj<FetchDataService>;

    const mockData = [
        { title: 'Test Post 1', body: 'This is test post 1' },
        { title: 'Another Post', body: 'This is another post' },
        { title: 'Angular Testing', body: 'Testing in Angular' }
    ];

    beforeEach(async () => {
        mockFetchDataService = jasmine.createSpyObj('FetchDataService', ['fetchData']);
        mockFetchDataService.fetchData.and.returnValue(of(mockData));

        await TestBed.configureTestingModule({
            imports: [UnitTestingComponent, FormsModule],
            providers: [
                { provide: FetchDataService, useValue: mockFetchDataService }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(UnitTestingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('fetchData', () => {
        it('should fetch data and populate "data" and "filteredData"', () => {
            component.fetchData();
            expect(mockFetchDataService.fetchData).toHaveBeenCalled();
            expect(component.data).toEqual(mockData);
            expect(component.filteredData).toEqual(mockData);
        });
    });

    describe('filterData', () => {
        beforeEach(() => {
            component.data = mockData;
            component.filteredData = mockData;
        });

        it('should filter data based on searchTerm', () => {
            component.searchTerm = 'Angular';
            component.filterData();

            expect(component.filteredData.length).toBe(1);
            expect(component.filteredData[0].title).toBe('Angular Testing');
        });

        it('should be case insensitive', () => {
            component.searchTerm = 'angular';
            component.filterData();

            expect(component.filteredData.length).toBe(1);
            expect(component.filteredData[0].title).toBe('Angular Testing');
        });

        it('should return all data if searchTerm matches all', () => {
            component.searchTerm = '';
            component.filterData();
            expect(component.filteredData.length).toBe(3);
        });

        it('should return empty array if no match found', () => {
            component.searchTerm = 'XYZ123';
            component.filterData();
            expect(component.filteredData.length).toBe(0);
        });
    });
});
