import { DataStore } from '@aws-amplify/datastore';
import { Project } from './models';
import React from 'react'

function ProjectList() {

    await DataStore.save(
        new Project({
            id:
            "title": "",
            "image_url": "",
            "description": ""
        })
    );

  return (
      <>


      </>
  )
}

export default ProjectList