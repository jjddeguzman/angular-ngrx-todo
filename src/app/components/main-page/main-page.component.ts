import { Component, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from '../../api.service';
import { MOCK_DATA } from '../../mock-data';
import { addTodo, loadTodos } from '../../state/todo.action';
import { selectAllTodos } from '../../state/todo.selector';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public allTodos$ = this.store.select(selectAllTodos);
  public todo = '';
  data: any = [];
  constructor(private api: ApiService, private store: Store) {}
  ngOnInit() {
    this.data = MOCK_DATA;
    this.store.dispatch(loadTodos());
    this.allTodos$.subscribe((res) => {
      console.log(res);
    });
  }

  addTodo() {
    // this.store.dispatch(addTodo({ content: this.todo }));
    // this.todo = '';
    // console.log(this.todo);
  }

  onToggleCheck(list: any) {
    list.isChecked = !list.isChecked;
  }

  onDeleteTodo() {}
}
