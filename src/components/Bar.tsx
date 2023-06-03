import React from 'react'

// 定义组件类型
// 组件是函数 关注点：参数、返回值
//  组件函数的阐述 props 组件函数的返回值是jsx元素

interface IProps1 {
  a: number
  b?: string[]
  c: React.CSSProperties
  children: React.ReactNode
}


// export default function Bar(props: IProps1): React.ReactNode {
//   console.log(props.a)
//   return '132'
// }

// React内置类型
// JSX.element
// React.ReactChild
// React.ReactNode

// React.ReactNode === React.ReactChild | React.ReactChild[] | null
// React.ReactNode === JSX.Element | JSX.Element[] | string

// const h1: JSX.Element = <h1 />

//  行内样式类型：React.CSSProperties

// 官方提供的函数组件类型：React.FC<T>(React.FunctionalComponnet)

const Bar: React.FC<IProps1> = (props = {
  a: 1,
  b: [''],
  c: {},
  children: <div />,
}) => {
  console.log(props)
  const fn = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(e)
  }
  return <div onClick={fn}>123</div>
}

// Bar.defaultProps = {}

export default Bar
