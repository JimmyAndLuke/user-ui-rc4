import { Injectable } from "@angular/core";
import { Article } from "../../_common/models/article";
import { Observable } from "rxjs/Rx";

const items: Article[] = [
  {
    id: '我为什么选择Angular 2',
    title: '我为什么选择Angular 2？',
    summary: '晚期选择恐惧症患者可怎么活啊……本文告诉你答案！',
    content: require('./10.我为什么选择Angular 2.md'),
    forward: false,
    column: '雪狼湖',
    tags: ['现在'],
    authors: ['雪狼']
  },
  {
    id: '漫漫升级路……竟然这么简单',
    title: '漫漫升级路……竟然这么简单？',
    summary: 'Angular 2和Angular 1之间的变化是如此之大，以至于很多人担心能否在两个版本之间迁移的问题，本文将给您答案',
    content: require('./20.漫漫升级路……竟然这么简单.md'),
    first: true,
    column: '雪狼湖',
    tags: ['现在'],
    authors: ['雪狼']
  },
  {
    id: '一‘括’抵千言……Angular 2中的绑定',
    title: '一‘括’抵千言……Angular 2中的绑定',
    summary: 'Angular 2提供了空前强大的数据绑定语法。它直接代替了Angular 1中的60多个内置指令，以及无数的自定义指令，本文为您讲解强大的绑定',
    content: require('./30.一括抵千言……Angular 2中的绑定.md'),
    first: true,
    column: '雪狼湖',
    tags: ['现在'],
    authors: ['雪狼']
  },
  {
    id: '组件与指令概述',
    title: '组件与指令概述',
    summary: 'Angular 2中的指令变得更加简单和强大，本文将为您讲解Angular 2中的三种指令及其应用',
    content: require('./40.组件与指令概述.md'),
    first: true,
    column: '雪狼湖',
    tags: ['现在'],
    authors: ['雪狼']
  },
  {
    id: '弯道超车！后端程序员的Angular快速指南',
    title: '弯道超车！后端程序员的Angular快速指南',
    summary: '与其临渊羡鱼，不如退而结网。看到前端如火如荼的发展，作为后端程序员的你，是否在跃跃欲试的同时又觉得无从下手？本文将给你信心！',
    content: require('./50.弯道超车！后端程序员的Angular快速指南.md'),
    first: true,
    column: '雪狼湖',
    tags: ['现在', '烧脑'],
    authors: ['雪狼']
  },
];

@Injectable()
export class ArticleApi {
  items: Observable<Article> = Observable.from(items);
}
