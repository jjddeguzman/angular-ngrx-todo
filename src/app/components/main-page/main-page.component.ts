import { Component, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
import { ApiService } from '../../api.service';
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
  content: any;
  constructor(private api: ApiService, private store: Store) {}
  ngOnInit() {
    // this.data = MOCK_DATA;
    this.store.dispatch(loadTodos());
    this.allTodos$.subscribe((res) => {
      res.forEach((data) => {
        this.content = data.content;
      });
      // this.content = res.content;
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

  onDeleteTodo(list: any) {
    Swal.fire({
      title: `Do you want to remove task?`,
      text: `${list.content}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
