﻿export default [
  {
    exact: false,
    path: '/',
    component: './layouts',
    routes: [
      {
        path: '/user',
        layout: false,
        access: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/Login',
            access: '/user/login',
          },
          {
            path: '/user',
            redirect: '/user/login',
          },
        ],
      },
      {
        path: '/admin',
        name: 'admin',
        icon: 'crown',
        access: '/admin',
        routes: [
          {
            name: 'Permission',
            icon: 'control',
            path: '/admin/permissions',
            access: '/admin/permissions',
            component: './Admin/Permission',
          },
          {
            name: 'Menu',
            icon: 'menu',
            path: '/admin/menus',
            access: '/admin/menus',
            component: './Admin/Menu',
          },
          {
            name: 'Role',
            icon: 'gold',
            path: '/admin/roles',
            access: '/admin/roles',
            component: './Admin/Role',
          },
          {
            name: 'User',
            icon: 'user',
            path: '/admin/users',
            access: '/admin/users',
            component: './Admin/User',
          },
          {
            path: '/admin',
            redirect: '/admin/users',
          },
        ],
      },
      {
        path: '/movie-data',
        name: 'movie-data',
        icon: 'database',
        access: '/movie-data',
        routes: [
          {
            name: 'Category',
            icon: 'control',
            path: '/movie-data/category',
            access: '/movie-data/category',
            component: './MovieData/Category',
          },
          {
            name: 'Movie-Group',
            icon: 'table',
            path: '/movie-data/movie-group',
            access: '/movie-data/movie-group',
            component: './MovieData/MovieGroup',
          },
          {
            name: 'Part-Movie',
            icon: 'apartment',
            path: '/movie-data/part-movie',
            access: '/movie-data/part-movie',
            component: './MovieData/PartMovie',
          },
          {
            name: 'Fansub',
            icon: 'team',
            path: '/movie-data/fansub',
            access: '/movie-data/fansub',
            component: './MovieData/Fansub',
          },
          {
            name: 'Movie',
            icon: 'gold',
            path: '/movie-data/movie',
            access: '/movie-data/movie',
            component: './MovieData/Movie',
          },
          {
            name: 'Movie-Status',
            icon: 'gold',
            path: '/movie-data/movie-status',
            access: '/movie-data/movie-status',
            component: './MovieData/MovieStatus',
          },
          {
            name: 'Error-Movie',
            icon: 'exclamation',
            path: '/movie-data/error-movie',
            access: '/movie-data/error-movie',
            component: './MovieData/ErrorMovie',
          },
          {
            name: 'Comment',
            icon: 'wechat',
            path: '/movie-data/comment',
            access: '/movie-data/comment',
            component: './MovieData/Comment',
          },
          {
            path: '/movie-data',
            redirect: '/movie-data/movie',
          },
        ],
      },
      {
        path: '/history',
        name: 'history',
        icon: 'history',
        access: '/history',
        routes: [
          {
            name: 'Upload-History',
            icon: 'upload',
            path: '/history/upload-history',
            access: '/history/upload-history',
            component: './History/UploadHistory',
          },
          {
            path: '/history',
            redirect: '/history/upload-history',
          },
        ],
      },
      {
        path: '/system',
        name: 'system',
        icon: 'windows',
        access: '/system',
        routes: [
          {
            name: 'Setting-System',
            icon: 'setting',
            path: '/system/setting-system',
            access: '/system/setting-system',
            component: './System/SettingSystem',
          },
          {
            name: 'Auto-Upload',
            icon: 'upload',
            path: '/system/auto-upload',
            access: '/system/auto-upload',
            component: './System/AutoUpload',
          },
          {
            path: '/system',
            redirect: '/system/valid-address',
          },
        ],
      },
      {
        path: '/forum',
        name: 'forum',
        icon: 'form',
        access: '/forum',
        routes: [
          {
            name: 'Group-Chat',
            icon: 'usergroup-add',
            path: '/forum/group-chat',
            access: '/forum/group-chat',
            component: './Forum/GroupChat',
          },
          {
            path: '/forum',
            redirect: '/forum/group-chat',
          },
        ],
      },
      {
        path: '/account',
        name: 'account',
        icon: 'account',
        access: '/account',
        component: './Account',
        hideInMenu: true,
      },
      {
        path: '/',
        redirect: '/user/login',
      },
    ],
  },
];
