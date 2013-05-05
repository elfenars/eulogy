# Only Livereload, Uglify and Shotgun for this one.

guard 'shotgun' do
  watch('app.rb')
end

guard 'livereload' do
  watch(%r{views/.+\.(erb|haml)$})
  watch(%r{public/.*/.+\.(css|js|html)})
  watch(%r{.+\.(rb|ru)})
end

guard 'uglify', :input => 'public/js/scripts.js', :output => 'public/js/scripts.min.js' do
  watch 'public/js/scripts.js'
end
