<reference types="vite/client" />
     


declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
  declare module '*.md' {
    const content: string
    export default content
  }
  
  declare module '*.svg' {
    const content: string
    export default content
  }
  
  declare module '*.png' {
    const content: string
    export default content
  }
  
  declare module '*.jpg' {
    const content: string
    export default content
  }
  
  declare module '*.jpeg' {
    const content: string
    export default content
  }
  
  declare module '*.gif' {
    const content: string
    export default content
  }
  
  declare module '*.webp' {
    const content: string
    export default content
  }
  
  declare module '*.json' {
    const content: any
    export default content
  }
  
  interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_API_BASE_URL: string
    readonly VITE_MODE: 'development' | 'production' | 'test'

  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }