require 'spec_helper'

describe 'SEARCH people' do
  before do
    visit '/'
    click_on 'Iniciar busca'
  end

  it 'shows form for searching' do
    # Name field
    expect(page).to have_content 'Nome'
    expect(page).to have_css '#lbl-0+ion-input'

    # Father's name field
    expect(page).to have_content 'Nome do pai'
    expect(page).to have_css '#lbl-1+ion-input'

    # Mother's name field
    expect(page).to have_content 'Nome da mãe'
    expect(page).to have_css '#lbl-2+ion-input'

    # Gender field
    expect(page).to have_content 'Sexo'
    expect(page).to have_css '#lbl-3+ion-select'

    # Age field
    expect(page).to have_content 'Idade aparente'
    expect(page).to have_css '#lbl-3+ion-select'

    # Height field
    expect(page).to have_content 'Altura (em metros)'
    expect(page).to have_css '#lbl-4+ion-select'

    # Skin color field
    expect(page).to have_content 'Cor da pele'
    expect(page).to have_css '#lbl-5+ion-select'

    # Hair color field
    expect(page).to have_content 'Cor do cabelo'
    expect(page).to have_css '#lbl-6+ion-select'

    # Eyes color field
    expect(page).to have_content 'Cor dos olhos'
    expect(page).to have_css '#lbl-7+ion-select'

    # Physical field
    expect(page).to have_content 'Tipo físico'
    expect(page).to have_css '#lbl-9+ion-select'

    # Tattoo field
    expect(page).to have_content 'Tatuagem'
    expect(page).to have_css '#lbl-10+ion-select'

    # Scar field
    expect(page).to have_content 'Cicatriz'
    expect(page).to have_css '#lbl-11+ion-select'

    # Tattoo field
    expect(page).to have_content 'Amputado'
    expect(page).to have_css '#lbl-12+ion-select'

    # Tattoo field
    expect(page).to have_content 'Deficiente'
    expect(page).to have_css '#lbl-13+ion-select'

    # Submit button
    expect(page).to have_content 'Buscar'
    expect(page).to have_css 'button.search-button'
  end

  it 'fills in form and show list of people found' do
    # Wait for app to load page
    sleep 3

    # Click search button
    find('button.search-button').click

    expect(page).to have_content 'Resultados da busca'    
  end
end