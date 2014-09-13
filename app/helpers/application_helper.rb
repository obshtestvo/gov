module ApplicationHelper
  def definition_of(term, *args)
    options = args.extract_options!
    options[:title] ||= t("definitions.#{term}").strip
    args << options

    content_tag :abbr, *args
  end
end
