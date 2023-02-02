import React from 'react'
import { TodoContent } from '../components/TodoContent'
import { TodoInput } from '../components/TodoInput'

export default function Todo() {
  return (
    <div>
        <TodoInput />
        <TodoContent />
    </div>
  )
}
