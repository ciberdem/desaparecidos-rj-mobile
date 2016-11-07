require 'spec_helper'

describe 'SEARCH people' do
  before do
    # WebMock.allow_net_connect!

    # Stub search request
    url = 'http://162.243.118.247/pesquisa?name=cri&father=undefined&mother=undefined&sex=undefined&age=undefined&height=undefined&skin=undefined&hair=undefined&eyes=undefined&specificity=undefined'
    stub_request(:get, url).to_return(:body => File.read(File.join("spec", "fixtures", "people.json")))

    visit '/'
    click_on 'Iniciar busca'
  end

  # it 'shows form for searching' do
  #   # Name field
  #   expect(page).to have_content 'Nome'
  #   expect(page).to have_css '#lbl-0+ion-input'

  #   # Father's name field
  #   expect(page).to have_content 'Nome do pai'
  #   expect(page).to have_css '#lbl-1+ion-input'

  #   # Mother's name field
  #   expect(page).to have_content 'Nome da mãe'
  #   expect(page).to have_css '#lbl-2+ion-input'

  #   # Gender field
  #   expect(page).to have_content 'Sexo'
  #   expect(page).to have_css '#lbl-3+ion-select'

  #   # Age field
  #   expect(page).to have_content 'Idade aparente'
  #   expect(page).to have_css '#lbl-3+ion-select'

  #   # Height field
  #   expect(page).to have_content 'Altura (em metros)'
  #   expect(page).to have_css '#lbl-4+ion-select'

  #   # Skin color field
  #   expect(page).to have_content 'Cor da pele'
  #   expect(page).to have_css '#lbl-5+ion-select'

  #   # Hair color field
  #   expect(page).to have_content 'Cor do cabelo'
  #   expect(page).to have_css '#lbl-6+ion-select'

  #   # Eyes color field
  #   expect(page).to have_content 'Cor dos olhos'
  #   expect(page).to have_css '#lbl-7+ion-select'

  #   # Specificities field
  #   expect(page).to have_content 'Característica física'
  #   expect(page).to have_css '#lbl-8+ion-select'

  #   # Submit button
  #   expect(page).to have_content 'Buscar'
  #   expect(page).to have_css 'button.search-button'
  # end

  it 'fills in form and show list of people found' do
    # Fill name field
    find(:css, '#lbl-0+ion-input').set 'cri'

    # WebMock.disable_net_connect!

    # Click search button
    find('button.search-button').click

    save_and_open_page
  end
end