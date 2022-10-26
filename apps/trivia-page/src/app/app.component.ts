import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Trivia Page';

    questions: { question: string }[] = [];

    constructor(private http: HttpClient) {
        for (let i = 0; i < 5; i++) {
            this.addNewQuestion()
        }
    }

    addNewQuestion() {
        let get = this.http.get<{ results: [{ question: string }] }>("https://opentdb.com/api.php?amount=1&difficulty=easy");

        get.subscribe((data) => {
            this.questions.push({question: data.results[0].question});
        })
    }
}
