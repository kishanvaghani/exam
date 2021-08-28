import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'login';
  login = [];
  logout = [];
  count = [];

  ngOnInit() {
    for (let i = 0; i < 24; i++) {
      this.count[i] = [];
    }
    this.login = this.data.filter((e) => e.type === 'login');
    this.logout = this.data.filter((e) => e.type === 'logout');

    this.login.map((e1, i1) => {
      this.logout.map((e2, i2) => {
        if (e1.userid === e2.userid) {
          for (
            let i = new Date(e1.timestamp).getHours();
            i <= new Date(e2.timestamp).getHours();
            i++
          ) {
            this.count[i].push(e1.userid);
          }
          this.logout.splice(i2, 1);
          this.login.splice(i1, 1);
        }
      });
    });
    this.login.map((e1, i1) => {
      for (let i = new Date(e1.timestamp).getHours(); i <= 23; i++) {
        this.count[i].push(e1.userid);
      }
      // this.login.splice(i1,1);
    });

    this.logout.map((e1, i1) => {
      for (let i = 0; i <= new Date(e1.timestamp).getHours(); i++) {
        this.count[i].push(e1.userid);
      }
    });
  }

  data = [
    {
      type: 'login',
      userid: 'u1',
      timestamp: '2020-12-16 00:15',
    },
    {
      type: 'login',
      userid: 'u4',
      timestamp: '2020-12-16 2:10',
    },
    {
      type: 'logout',
      userid: 'u2',
      timestamp: '2020-12-16 3:15',
    },
    {
      type: 'login',
      userid: 'u3',
      timestamp: '2020-12-16 3:25',
    },
    {
      type: 'logout',
      userid: 'u3',
      timestamp: '2020-12-16 3:45',
    },
    {
      type: 'login',
      userid: 'u5',
      timestamp: '2020-12-16 4:16',
    },
    {
      type: 'login',
      userid: 'u6',
      timestamp: '2020-12-16 16:15',
    },
    {
      type: 'logout',
      userid: 'u1',
      timestamp: '2020-12-16 19:15',
    },
    {
      type: 'logout',
      userid: 'u7',
      timestamp: '2020-12-16 20:15',
    },
    {
      type: 'logout',
      userid: 'u9',
      timestamp: '2020-12-16 23:15',
    },
    {
      type: 'login',
      userid: 'u8',
      timestamp: '2020-12-16 23:19',
    },
  ];
}
