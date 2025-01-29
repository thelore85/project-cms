'use client'

import {faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTitle, DrawerTrigger, DrawerHeader, DrawerDescription} from '@/app/components/ui/drawer'
import Logo from '@/app/components/navigations/LogoBlack'
import Link from 'next/link'
import CtaMain from '../buttons/CtaMain'
import CtaBroker from '../buttons/CtaBroker'

type Props = {}

export default function Hamburger({}: Props) {
  return (
    <>
      <Drawer direction="right">
        <DrawerTrigger>
          <div className="text-primary text-3xl">
            <FontAwesomeIcon icon={faBars} className="w-7 h-7" />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex justify-between items-center text-primary text-xl">
                <Logo />
                <DrawerClose className="drawer-close-button">
                  <FontAwesomeIcon icon={faClose} className="font-extrabold text-3xl" />
                </DrawerClose>
              </div>
            </DrawerTitle>
            <DrawerDescription>..</DrawerDescription>
          </DrawerHeader>
          <div className="p-5">
            <ul className="list-none text-3xl font-bold text-primary">
              <li className="mb-5">
                <Link href="#howTo" className="mb-5 hover:text-primary">
                  <DrawerClose>Sobre Nosotros</DrawerClose>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="#faq" className="mb-5 hover:text-primary">
                  <DrawerClose>FAQ</DrawerClose>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="#testimonials" className="mb-5 hover:text-primary">
                  <DrawerClose>Opiniones</DrawerClose>
                </Link>
              </li>
              <li className="mb-5">
                <Link href="#footer" className="mb-5 hover:text-primary">
                  <DrawerClose>Contactos</DrawerClose>
                </Link>
              </li>
            </ul>
          </div>
          <DrawerFooter>
            <div className="mb-4 inline-block w-full">
              <CtaMain />
            </div>
            <CtaBroker />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
