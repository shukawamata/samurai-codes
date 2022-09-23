import React from 'react'

const Items = () => {
  return (
    <form className='container_item card'>
        <div className="item-title">
          <h3>Item_name: test</h3>
        </div>
        <div className="container_form ">
              <textarea className="comments" rows="10" cols="60"></textarea>
            <div className="button-update">
              <input type="submit" value="Update" className="btn btn-primary"/>
            </div>
        </div>
    </form>
  )
}

export default Items