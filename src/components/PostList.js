import React, { Component } from 'react';

import PostItem from './PostItem';


class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Karen Tatiane',
          avatar: 'https://i.pravatar.cc/150?img=47'
        },
        date: '20 Jun 2020',
        content: 'Assisti um filme incrivel hoje, recomendo john wick!',
        comments: [
          {
            id: 2,
            author: {
              name: 'Henrique Paim',
              avatar: 'https://avatars1.githubusercontent.com/u/14090441?s=60&v=4',
            },
            date: '21 Jun 2020',
            content:
              'Que legal, vou assistir!'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Raphael Silva',
          avatar: 'https://i.pravatar.cc/150?img=3'
        },
        date: '24 Jun 2020',
        content:
          'E ae galera!\nEstou querendo fazer um curso de programação com javascript, o que vocês me indicam?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Felipe Ribeiro',
              avatar: 'https://i.pravatar.cc/150?img=15'
            },
            date: '25 Jun 2020',
            content:
              'Eu recomendo o Bootcamp da Rocketseat'
          },
          {
            id: 5,
            author: {
              name: 'Raphael Silva',
              avatar: 'https://i.pravatar.cc/150?img=3'
            },
            date: '25 Jun 2020',
            content:
              'Que legal!\nVou me inscrever nesse, já ouvi falar muito bem deles!'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Ricardo Cruz',
          avatar: 'https://i.pravatar.cc/150?img=6'
        },
        date: '27 Jun 2020',
        content:
          'Posei um projeto no GitHub, verifiquem e quem quiser pode contribuir',
        comments: [
          {
            id: 7,
            author: {
              name: 'Leonardor Ruiz',
              avatar: 'https://i.pravatar.cc/150?img=8'
            },
            date: '27 Jun 2020',
            content:
              'Poxa, seu trabalho esta muito bom!',
          },
          {
            id: 8,
            author: {
              name: 'Caio Madureira',
              avatar: 'https://i.pravatar.cc/150?img=12'
            },
            date: '28 Jun 2020',
            content:
              'Vou tentar melhorar alguns pontos e te mando o commit'
          }
        ]
      }
    ]
  };


  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;