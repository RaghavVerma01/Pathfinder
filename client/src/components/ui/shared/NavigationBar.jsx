import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {Link} from 'react-router-dom'


const NavigationBar = () => {
  return (
    <>
    <div className="nav-bar">
      <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home  
              </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Something Here
              </NavigationMenuLink>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Another Link
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Planning</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Something Here
              </NavigationMenuLink>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Another Link
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
    </>
  )
}

export default NavigationBar
