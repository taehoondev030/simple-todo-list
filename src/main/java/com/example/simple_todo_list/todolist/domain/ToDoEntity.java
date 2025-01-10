package com.example.simple_todo_list.todolist.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ToDoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name="title", nullable = false)
    private String title;

    @Column(name="content")
    private String content;

    @Builder
    public ToDoEntity(String title, String content) {
        this.title=title;
        this.content=content;
    }

    public void update(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
