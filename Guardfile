# Only Livereload, Uglify and Shotgun for this one.

guard 'shotgun' do
  watch('app.rb')
end

guard 'livereload' do
  watch(%r{views/.+\.(erb|haml)$})
  watch(%r{public/.*/.+\.(css|js|html)})
  watch(%r{.+\.(rb|ru)})
end

guard 'uglify', :destination_file => "public/js/scripts.min.js" do
  watch (%r{public/js/scripts.js})
end