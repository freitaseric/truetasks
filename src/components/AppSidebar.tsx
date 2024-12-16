import {
  Calendar,
  Home,
  Search,
  Settings,
  Bookmark,
  LogIn,
  User,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { useLocale, useTranslations } from 'next-intl'

export function AppSidebar() {
  const $t = useTranslations('AppSidebar')
  const locale = useLocale()
  const isLogged = false

  const items = [
    {
      title: $t('groups.application.items.home'),
      url: '#',
      icon: Home,
    },
    {
      title: $t('groups.application.items.tasks'),
      url: '#',
      icon: Bookmark,
    },
    {
      title: $t('groups.application.items.calendar'),
      url: '#',
      icon: Calendar,
    },
    {
      title: $t('groups.application.items.search'),
      url: '#',
      icon: Search,
    },
    {
      title: $t('groups.application.items.settings'),
      url: '#',
      icon: Settings,
    },
  ]

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {!isLogged ? (
              <SidebarMenuButton asChild>
                <a href={`${locale}/user`}>
                  <User />
                  <span>AnonUser</span>
                </a>
              </SidebarMenuButton>
            ) : (
              <SidebarMenuButton asChild>
                <a href={`${locale}/login`}>
                  <LogIn />
                  <span>{$t('header.unlogged.login')}</span>
                </a>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {$t('groups.application.title')}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <a href={`${locale}/${item.url}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
