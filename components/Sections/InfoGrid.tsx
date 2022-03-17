import HIcon from '@hackclub/icons'
import React from 'react'

const Card: React.FC<{ icon: React.ReactNode; title: string }> = ({
  children,
  icon,
  title,
}) => {
  return (
    <div className="p-4 shadow-lg rounded-md hover:shadow-xl transition-all group">
      <div className="group-hover:-translate-y-1 group-hover:rotate-3 duration-200 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl">{title}</h3>
      {children}
    </div>
  )
}

const InfoGrid: React.FC = ({ children }) => {
  return (
    <div className="my-14">
      <div className="grid grid-cols-2 gap-4 auto-rows-fr">
        <Card
          icon={<HIcon glyph="explore" size={48} className="text-blue-400" />}
          title="Workshops and mentors"
        >
          {`We'll provide beginner-oriented workshops on coding basics, web
          development, design, and more, to help you learn to code. Mentors will
          also be available to provide assistance when needed.`}
        </Card>

        <Card
          icon={<HIcon glyph="food" size={48} className="text-orange-400" />}
          title="Free meals"
        >
          {`We'll provide meals, snacks and drinks for the duration of the
          hackathon, so that you can keep coding without worrying about food.
          (Dietary restrictions? Don't worry, we've got you covered!)`}
        </Card>

        <Card
          icon={<HIcon glyph="emoji" size={48} className="text-purple-400" />}
          title="Fun & games"
        >
          {`Mile High Hacks is about more than just coding - make new friends, eat
          ice cream at midnight, attend the 2am dance party, go on a scavenger
          hunt, and more!`}
        </Card>

        <Card
          icon={<HIcon glyph="shirt" size={48} className="text-red-400" />}
          title="Prizes"
        >
          {`Every participant will receive a free month of repl.it's hacker
          plan, a t-shirt, stickers, and more. Winners will walk away with
          additional prizes, including DigitalOcean credits...`}
        </Card>

        <Card
          icon={<HIcon glyph="welcome" size={48} className="text-pink-400" />}
          title="By students, for students"
        >
          {`Mile High Hacks is Colorado's very first hackathon independently
          organized by high schoolers, for high schoolers. It's our goal to
          inspire creativity and innovation by introducing you to coding in a
          super fun way.`}
        </Card>

        <Card
          icon={<HIcon glyph="like" size={48} className="text-green-400" />}
          title="Safety"
        >
          {`Safety is a top priority at Mile High Hacks. We'll have adult
          supervisors with background checks on site for the duration of the
          event and will work with our venue's security to make sure that
          everyone stays safe.`}
        </Card>
      </div>
    </div>
  )
}

export default InfoGrid
