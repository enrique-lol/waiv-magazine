import React from 'react'

const ArticleForm = ({ article, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <div className ='required'>
      <h2>Required</h2>
      <input
        required
        name="thumbnail"
        type="text"
        placeholder="Thumbnail (main image)"
        value={article.thumbnail}
        onChange={handleChange}
      />
      <input
        required
        name="title"
        type="text"
        placeholder="Title"
        value={article.title}
        onChange={handleChange}
      />
      <input
        required
        name="summary"
        type="text"
        placeholder="1-3 sentence summary"
        value={article.summary}
        onChange={handleChange}
      />
      <input
        required
        name="quote"
        type="text"
        placeholder="1-3 sentence quote"
        value={article.quote}
        onChange={handleChange}
      />
      <input
        required
        name="authorName"
        type="text"
        placeholder="Author"
        value={article.authorName}
        onChange={handleChange}
      />
      <input
        required
        name="publishDate"
        type="text"
        placeholder="Date"
        value={article.publishdate}
        onChange={handleChange}
      />
      <input
        required
        name="intro"
        type="text"
        placeholder="Intro"
        value={article.intro}
        onChange={handleChange}
      />
    </div>
    <div className='non-required'>
      <h2>Additional</h2>
      <input
        name="intro2"
        type="text"
        placeholder="Second intro paragraph"
        value={article.intro2}
        onChange={handleChange}
      />
      <div className='new-paragraph'>
        <input
          name="img2"
          type="text"
          placeholder="Second image"
          value={article.img2}
          onChange={handleChange}
        />
        <input
          name="heading2"
          type="text"
          placeholder="Second heading"
          value={article.heading2}
          onChange={handleChange}
        />
        <input
          name="paragraph2"
          type="text"
          placeholder="Second paragraph"
          value={article.paragraph2}
          onChange={handleChange}
        />
      </div>
      <div className='new-paragraph'>
        <input
          name="img3"
          type="text"
          placeholder="Third image"
          value={article.img3}
          onChange={handleChange}
        />
        <input
          name="heading3"
          type="text"
          placeholder="Third heading"
          value={article.heading3}
          onChange={handleChange}
        />
        <input
          name="paragraph3"
          type="text"
          placeholder="Third paragraph"
          value={article.paragraph3}
          onChange={handleChange}
        />
      </div>
      <input
        name="img4"
        type="text"
        placeholder="Fourth image"
        value={article.img4}
        onChange={handleChange}
      />
      <input
        name="heading4"
        type="text"
        placeholder="Fourth heading"
        value={article.heading4}
        onChange={handleChange}
      />
      <input
        name="paragraph4"
        type="text"
        placeholder="Fourth paragraph"
        value={article.paragraph4}
        onChange={handleChange}
      />
      <div className='new-paragraph'>
        <input
          name="img5"
          type="text"
          placeholder="Fifth image"
          value={article.img5}
          onChange={handleChange}
        />
        <input
          name="heading5"
          type="text"
          placeholder="Fifth heading"
          value={article.heading5}
          onChange={handleChange}
        />
        <input
          name="paragraph5"
          type="text"
          placeholder="Fifth paragraph"
          value={article.paragraph5}
          onChange={handleChange}
        />
      </div>
    </div>
    <button type="submit">Submit</button>
  </form>
)

export default ArticleForm
