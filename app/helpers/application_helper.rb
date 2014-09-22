module ApplicationHelper
  def definition_of(term, *args)
    options = args.extract_options!
    options[:title] ||= t("definitions.#{term}").strip
    args << options

    content_tag :abbr, *args
  end

  def check_mark(options = {})
    options = {
      :class       => 'check',
      :version     => '1.1',
      :xmlns       => 'http://www.w3.org/2000/svg',
      :viewBox     => '0 0 15 15',
      :'xml:space' => 'preserve',
    }.merge(options)

    path = '<path d="M7.5,0C3.357,0,0,3.357,0,7.5S3.357,15,7.5,15S15,11.643,15,7.5S11.643,0,7.5,0z M6.439,11.035 L2.904,7.5l1.414-1.414l2.121,2.121l4.242-4.242l1.414,1.414L6.439,11.035z"/>'.html_safe.freeze

    content_tag :svg, path, options
  end
end
