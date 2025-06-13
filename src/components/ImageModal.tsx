"use client"

import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

export function ImageModal({ src, alt, children }: { src: string; alt: string; children: React.ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="p-4">
            <Image
              src={src}
              alt={alt}
              width={600}
              height={600}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
              unoptimized
            />
          </div>
          <Dialog.Close className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}