import Link from 'next/link'
import Image from 'next/image'
import React, { ReactElement } from 'react'

const NavbarList = () => {
  return (
    <ul className="flex flex-row">
      <div>
        {NavbarItemsLeft.map((item: NavbarItemTypes, idx: number) => {
          return <li key={`navItem_${idx}`}>{item.component}</li>
        })}
      </div>
      <div>
        {NavbarItemsMiddle.map((item: NavbarItemTypes, idx: number) => {
          return <li key={`navItem_${idx}`}>{item.component}</li>
        })}
      </div>
      <div>
        {NavbarItemsRight.map((item: NavbarItemTypes, idx: number) => {
          return <li key={`navItem_${idx}`}>{item.component}</li>
        })}
      </div>
    </ul>
  )
}

export default NavbarList

enum NavbarItemEnum {
  PROJECTS = 'Projects',
  CONTACT = 'Contact',
  GITHUB = 'Github',
  LOGO = 'JTDean',
  LINKEDIN = 'LinkedIn',
  MEDIUM = 'Medium',
  TWITTER = 'Twitter',
}

type NavbarItemTypes = {
  name: NavbarItemEnum
  component?: ReactElement
}

const NavbarItemsLeft: NavbarItemTypes[] = [
  {
    name: NavbarItemEnum.PROJECTS,
    component: (
      <Link href={'/projects'}>
        <p className="">{NavbarItemEnum.PROJECTS}</p>
      </Link>
    ),
  },
  {
    name: NavbarItemEnum.CONTACT,
    component: (
      <Link href={'/contact'}>
        <p className="">{NavbarItemEnum.CONTACT}</p>
      </Link>
    ),
  },
]

const NavbarItemsMiddle: NavbarItemTypes[] = [
  {
    name: NavbarItemEnum.LOGO,
    component: (
      <Link href={'/'}>
        <Image
          src={'/Logo.svg'}
          width={'75px'}
          height={'11px'}
          alt={NavbarItemEnum.LOGO}
        />
      </Link>
    ),
  },
]

const NavbarItemsRight: NavbarItemTypes[] = [
  {
    name: NavbarItemEnum.LINKEDIN,
    component: (
      <a
        className=""
        href={'https://www.linkedin.com/in/jonathan-dean-ab67aa150/'}
      >
        <Image
          src={'/LinkedIn.svg'}
          width={'15px'}
          height={'15px'}
          alt={NavbarItemEnum.LINKEDIN}
        />
      </a>
    ),
  },
  {
    name: NavbarItemEnum.GITHUB,
    component: (
      <a className="" href={'https://github.com/JonTDean'}>
        <Image
          src={'/Github.svg'}
          width={'15px'}
          height={'15px'}
          alt={NavbarItemEnum.GITHUB}
        />
      </a>
    ),
  },
  {
    name: NavbarItemEnum.MEDIUM,
    component: (
      <a className="" href={'https://medium.com/@jonathantomdean'}>
        <Image
          src={'/Medium.svg'}
          width={'15px'}
          height={'15px'}
          alt={NavbarItemEnum.MEDIUM}
        />
      </a>
    ),
  },
  {
    name: NavbarItemEnum.TWITTER,
    component: (
      <a className="" href={'https://twitter.com/JonTDean'}>
        <Image
          src={'/Twitter.svg'}
          width={'15px'}
          height={'15px'}
          alt={NavbarItemEnum.TWITTER}
        />
      </a>
    ),
  },
]
