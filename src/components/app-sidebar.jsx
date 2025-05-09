'use client'

import * as React from 'react'
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Users,
  House
} from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavProjects } from '@/components/nav-projects'
import { NavUser } from '@/components/nav-user'
import { TeamSwitcher } from '@/components/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { createClient } from '@/lib/supabase/client'

const data = {
  teams: [
    {
      name: 'Refresh Church',
      logo: GalleryVerticalEnd,
      plan: 'Admin',
    },
    // {
    //   name: 'Acme Corp.',
    //   logo: AudioWaveform,
    //   plan: 'Startup',
    // },
    // {
    //   name: 'Evil Corp.',
    //   logo: Command,
    //   plan: 'Free',
    // },
  ],
  // projects: [
  //   {
  //     name: "Home",
  //     url: "/admin",
  //     icon: House,
  //   },
  // ],
  navMain: [
    {
      title: 'Content',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: 'Blogs', url: '/admin/blogs' },
        // { title: 'H-tags', url: '/admin/h-tags' },
      ],
    },
    // {
    //   title: 'Users',
    //   url: '#',
    //   icon: Users,
    //   isActive: true,
    //   items: [
    //     { title: 'Add User', url: '/admin/add-user' },
    //     { title: 'User Roles', url: '/admin/user-roles' },
    //   ],
    // },
  ],
}

export function AppSidebar({ ...props }) {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const getUser = async () => {
      const supabase = createClient()
      const { data, error } = await supabase.auth.getUser()
      if (!error) setUser(data.user)
    }

    getUser()
  }, [])

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavProjects projects={data.projects} /> */}
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        {user && (
          <NavUser
            user={{
              name: user.user_metadata?.name || user.email?.split('@')[0],
              email: user.email,
              avatar: user.user_metadata?.avatar_url || '',
            }}
          />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
